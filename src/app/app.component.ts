import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )

  appareils = [
    { name: "Washing Machine", status: "Off" },
    { name: "TV", status: "Off" },
    { name: "PC", status: "On" },
  ];

  // appareilOne = "Washing Machine";
  // appareilTwo = "TV";
  // appareilThree = "PC";

  // appareil1 = "Off";
  // appareil2 = "On";
  // appareil3 = "Off";

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onOn() {
    console.log("every appareil is ON");
  }
}
