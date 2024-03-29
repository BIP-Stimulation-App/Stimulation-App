import { useContext } from "react";
import Medication from "../Models/Medication";
import { LoginService } from "./LoginService";
import { getApiToken } from '../DataContext';
import { Settings } from "../AppSettings";
export class MedicationService{
    static api = Settings.api + "/Medication"
    static reAttempt = false;
    
    /**
     * getMedications
     */
    public static async getMedications():Promise<Medication[]> {
        var token = await getApiToken();
        const response = await fetch(MedicationService.api,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': token
                }
        });
        if(response.ok){
            this.reAttempt = false;
            var responseData = await response.json()
            const medicationArray: Medication[] = await responseData.map((medication: any) => new Medication(medication.id,medication.name, medication.description, medication.time, medication.frequency))
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
        var token = await getApiToken();
        const response = await fetch(MedicationService.api+"/"+id,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': token
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
        var token = await getApiToken();
        const response = await fetch(MedicationService.api + "/" + id,{
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
        console.log(JSON.stringify(medication));
        var token = await getApiToken();
        const response = await fetch(MedicationService.api,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
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