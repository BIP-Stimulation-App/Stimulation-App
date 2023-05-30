export class User{
    userName: String;
    firstName: String;
    lastName: String;
    email: String;
    anonymous:boolean;

    toString():string{
        return "User: " + this.userName + ". name: "  + this.firstName[0]+ ". " + this.lastName
    }
}