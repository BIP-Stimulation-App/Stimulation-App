import { Timespan } from "react-native/Libraries/Utilities/createPerformanceLogger";

export enum Difficulty {
    Easy,
    Normal,
    Hard
}

export enum Category {
    Strength,
    Cardio,
    Yoga,
    Coordination,
    Walking
}

export class Exercise {
    id: number;
    name: string;
    description: string;
    private _duration: Date;
    public get duration(): string {
        return this._duration.getHours().toString().padStart(2,'0')+ ":"+ this._duration.getMinutes.toString().padStart(2,'0')+ ":"+ this._duration.getSeconds.toString().padStart(2,'0');
    }
    public set durationDate(value:Date) {
        this._duration = value;
    }
    public get durationDate(): Date {
        return this._duration;
    }
    public set duration(value: string) {
        // Split the time string into hours, minutes, and seconds
        const [hours, minutes, seconds] = value.split(':');        
        // Create a new Date object with the current date and extracted time values
        const currentDate = new Date();
        currentDate.setHours(Number(hours), Number(minutes), Number(seconds));
        this._duration = currentDate; 
    }
    difficulty: Difficulty;
    reward: number;
    category: Category;

    constructor(id:number, name: string, description: string,duration: string,difficulty: Difficulty,reward: number,category: Category) {
        this.id = id;
        this.name = name;
        this.description= description;
        this.duration= duration;
        this.difficulty= difficulty;
        this.reward= reward;
        this.category= category;
    }
}