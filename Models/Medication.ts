import { Frequency } from "./Frequency";

export default class Medication{  
    id:number  
    name:string;
    description:string;
    time:Date;
    frequency:Frequency;
    /**
     *
     */
    constructor(id:number,name:string, description:string|null, time:Date, frequency:Frequency) {
        this.id = id
        this.name = name;
        this.description = description;
        this.time = time;
        this.frequency = frequency        
    }
}