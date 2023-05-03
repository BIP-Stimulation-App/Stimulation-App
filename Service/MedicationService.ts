import Medication from "../Models/Medication";
import { LoginService } from "./LoginService";

export class MedicationService{
    static api = "http://stimulationapp.com:5000/api/Medication"

    /**
     * getMedications
     */
    public static async getMedications():Promise<Medication[]> {
        const response = await fetch(MedicationService.api,{
            method: 'GET',
            headers: {
                'Accept': 'application/json'
                }
        })
        if(response.ok){
            return <Medication[]> JSON.parse(await response.text());
        } 
        if(response.status === 401 ){
            LoginService.ReLogIn()
        }
    }
    public static async removeMedications(id:number):Promise<boolean> {
        const response = await fetch(MedicationService.api + "/" + id,{
            method: 'DELETE'
        })
        if(response.ok){
            return true;
        } 
        else{
            return false;
        }
    }


}