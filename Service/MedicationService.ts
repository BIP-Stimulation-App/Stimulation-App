import Medication from "../Models/Medication";
import { LoginService } from "./LoginService";
import Credential from "../Models/Credentials"
import { Alert } from "react-native";

export class MedicationService{
    static api = "http://stimulationapp.com:5000/api/Medication"
    static reAttempt = false;
    /**
     * getMedications
     */
    public static async getMedications():Promise<Medication[]> {
        const response = await fetch(MedicationService.api,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': Credential.token
                }
        });
        if(response.ok){
            this.reAttempt = false;
            var data = await response.json()
            const medicationArray: Medication[] = await data.map((medication: any) => new Medication(medication.id,medication.name, medication.description, medication.time, medication.frequency))
            medicationArray.forEach(med => console.log(med));
            return medicationArray;
        } 
        if(response.status === 401 ){
            if(this.reAttempt){
                this.reAttempt = false;
                return [];
            }
            this.reAttempt = true;
            LoginService.ReLogIn().then(()=>{return this.getMedications()});            
        }
    }
    public static async getMedication(id:number):Promise<Medication> {
        const response = await fetch(MedicationService.api+"/"+id,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': Credential.token
                }
        })
        if(response.ok){
            return <Medication>JSON.parse(await response.text());
        } 
        if(response.status === 401 ){
            if(this.reAttempt){
                this.reAttempt = false;
                return null;
            }
            this.reAttempt = true;
            LoginService.ReLogIn().then(()=>{return this.getMedication(id)});            
        }
    }
    public static async removeMedications(id:number):Promise<boolean> {
        const response = await fetch(MedicationService.api + "/" + id,{
            method: 'DELETE',
            headers:{                
                'Authorization': Credential.token
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
            LoginService.ReLogIn().then(()=>{return this.getMedication(id)});            
        }
        else{
            return false;
        }
    }

    public static async addMedication(medication:Medication):Promise<string> {
        if(medication.name === ""){
            return "Name can not be empty";
        }
        const response = await fetch(MedicationService.api,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Credential.token
            },
            body: JSON.stringify(medication)
        }) 
        if(response.status === 401 ){
            if(this.reAttempt){
                this.reAttempt = false;
                return null;
            }
            this.reAttempt = true;
            LoginService.ReLogIn().then(()=>{return this.addMedication(medication)});            
        }
        if(response.status === 200){
            return "";
        }
        else return response.status.toString();

    }


}