import { Component, OnInit } from "@angular/core";
import {AppareilService} from './services/appareil.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
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

  // appareils = [
  //   { name: "Washing Machine", status: "Off" },
  //   { name: "TV", status: "Off" },
  //   { name: "PC", status: "On" },
  // ];

  // appareilOne = "Washing Machine";
  // appareilTwo = "TV";
  // appareilThree = "PC";

  // appareil1 = "Off";
  // appareil2 = "On";
  // appareil3 = "Off";

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onOn() {
    console.log("every appareil is ON");
    this.appareilService.switchOnAll();
  }

  onOff() {
    console.log("every appareil is OFF");
    this.appareilService.switchOffAll();
  }
}
