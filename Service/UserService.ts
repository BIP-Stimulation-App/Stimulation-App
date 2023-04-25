export class UserService{
static route = "http://localhost:5000/api/User"

static UsernameInUse(username:string):string
{
    try {
        let request = new XMLHttpRequest();
        request.open(
          "GET",
          this.route+"/UsernameInUse/" + username
        );
        request.send();
        request.onload = () => {
          if (request.status === 200) {
            console.log(request.response);
            return request.response;
          }
        };
      } catch (e) {
        //do nothing
        console.log("error: " + e);
      }
      return "";
}
}