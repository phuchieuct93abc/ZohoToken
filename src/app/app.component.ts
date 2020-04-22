import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  clientId:string
  clientSecret:string
  redirectUrl:string
  code:string
  constructor(private httpClient: HttpClient) {}

  submit() {
    this.httpClient.post("https://accounts.zoho.eu/oauth/v2/token", {
      grant_type: "authorization_code",
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUrl,
      code: this.code
    }).subscribe(data=>{
      console.log(data);
          });
    ;
  }
}
