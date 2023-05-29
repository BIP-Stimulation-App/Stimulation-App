export class NotificationSetting{
    medecine:boolean;
    medecineEarly:boolean; //for notifications one hour beforehand
    dailyReminder:boolean;
    dangerousParameters:boolean;
    leaderboards:boolean;    
    
    /**
     *
     */
    constructor(medecine:boolean,medecineEarly:boolean,dailyReminder:boolean,dangerousParameters:boolean,leaderboards:boolean) {
        this.dailyReminder = dailyReminder;
        this.dangerousParameters = dangerousParameters;
        this.leaderboards = leaderboards;
        this.medecine = medecine;
        this.medecineEarly = medecineEarly;
        
    }
}