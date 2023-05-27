import {getApiToken } from '../DataContext';
import { Exercise } from '../Models/Excercise';
import { LoginService } from './LoginService';



export class ExerciseService{
    public static route = "http://stimulationapp.com:5000/api/Exercise";
    static reAttempt = false;
    
    public static async getExercise(id:number):Promise<Exercise|string>{
        var token = await getApiToken();
        const response = await fetch(this.route+"/"+id,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': token
                }
        });
        if(response.ok){ 
            var body =  (await response.json());
            const exercise:Exercise =  body.map(((excercise: Exercise) => new Exercise(excercise.id, excercise.name, excercise.description, excercise.duration, excercise.difficulty,excercise.reward, excercise.category)));
            return exercise;
        }
        else return "Error: " + response.status + response.body;
    }
    public static async getExercises():Promise<Exercise[]|string>{
        var token = await getApiToken();
        const response = await fetch(this.route,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': token
                }
        });
        if(response.ok){ 
            var body =  (await response.json());
            const exercises:Exercise[] =  body.map(((excercise: Exercise) => new Exercise(excercise.id, excercise.name, excercise.description, excercise.duration, excercise.difficulty,excercise.reward, excercise.category)))
            return exercises;
        }
        else return "Error: " + response.status + response.body;
    }
    public static async removeExercise(id:number):Promise<boolean> {
        var token = await getApiToken();
        const response = await fetch(this.route + "/" + id,{
            method: 'DELETE',
            headers:{                
                'Authorization': token
            }
        })
        if(response.ok){
            return true;
        } 
        else if(response.status === 401 ){
            if(this.reAttempt){
                this.reAttempt = false;
                return null;
            }
            this.reAttempt = true;
            LoginService.ReLogIn().then(()=>{return this.removeExercise(id)});            
        }
        else{
            return false;
        }
    }

    public static async addExcercise(exercise:Exercise):Promise<string> {
        if(exercise.name === ""){
            return "Name can not be empty!";
        }
        if(exercise.reward === 0){
            return "Reward can't be 0";        
        }
        if(exercise.description === ""){
            return "Description can not be empty!";
        }
        if(exercise.duration === "00:00:00"){
            return "duration can not be less than 0 seconds long!";
        }
        var token = await getApiToken();
        const response = await fetch(this.route,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(exercise)
        }) 
        if(response.status === 401 ){
            if(this.reAttempt){
                this.reAttempt = false;
                return null;
            }
            this.reAttempt = true;
            LoginService.ReLogIn().then(()=>{return this.addExcercise(exercise)});            
        }
        if(response.status === 200){
            return "";
        }
        else return response.status.toString();
    }
}