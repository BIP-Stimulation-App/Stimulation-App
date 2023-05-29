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
    private duration: Date;
    public get getDuration(): string {
        return this.duration.getHours().toString().padStart(2,'0')+ ":"+ this.duration.getMinutes().toString().padStart(2,'0')+ ":"+ this.duration.getSeconds().toString().padStart(2,'0');
    }
    public set setDuration(value: string) {
        // Split the time string into hours, minutes, and seconds
        const [hours, minutes, seconds] = value.split(':');        
        // Create a new Date object with the current date and extracted time values
        const currentDate = new Date();
        currentDate.setHours(Number(hours), Number(minutes), Number(seconds));
        this.duration = currentDate; 
    }
    difficulty: Difficulty;
    reward: number;
    category: Category;

    constructor(id:number, name: string, description: string,duration: string,difficulty: Difficulty,reward: number,category: Category) {
        this.id = id;
        this.name = name;
        this.description= description;
        this.setDuration= duration;
        this.difficulty= difficulty;
        this.reward= reward;
        this.category= category;
    }

    public toString():string{
        return `Name: ${this.name}. Description: ${this.description}. Duration: ${this.duration}. Difficulty: ${this.difficulty}. Reward: ${this.reward}. Category: ${this.category}.`; 
    }
    public toApiPayload(): object {
        return {
          id: this.id,
          name: this.name,
          description: this.description,
          duration: this.getDuration,
          difficulty: Difficulty[this.difficulty], // Convert enum to string value
          reward: this.reward,
          category: Category[this.category], // Convert enum to string value
        };
      }
}