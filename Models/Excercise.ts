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
    duration: string;
    public getDuration(): Date {
        const [hours, minutes, seconds] = this.duration.split(':');        
        // Create a new Date object with the current date and extracted time values
        const currentDate = new Date();
        currentDate.setHours(Number(hours), Number(minutes), Number(seconds));
        return currentDate; 
    }
    public setDuration(value: Date) {
        // Split the time string into hours, minutes, and seconds
        this.duration = value.getHours().toString().padStart(2,'0')+ ":"+ value.getMinutes().toString().padStart(2,'0')+ ":"+ value.getSeconds().toString().padStart(2,'0');
        
    }
    difficulty: Difficulty;
    reward: number;
    category: Category;
    static getCategoryName(value: Category): string {
        return Category[value];
    }
    static getDifficultyName(value: Difficulty): string {
        return Difficulty[value];
      }


    constructor(id:number, name: string, description: string,duration: string,difficulty: Difficulty,reward: number,category: Category) {
        this.id = id;
        this.name = name;
        this.description= description;
        this.duration= duration;
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
          duration: this.duration,
          difficulty: Difficulty[this.difficulty], // Convert enum to string value
          reward: this.reward,
          category: Category[this.category], // Convert enum to string value
        };
      }
      
}