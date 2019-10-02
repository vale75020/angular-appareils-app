import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareilOne = "Washing Machine";
  appareilTwo = "TV";
  appareilThree = "PC";

  appareil1 = "Off";
  appareil2 = "Off";
  appareil3 = "Off";

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true
      }, 4000
    );
  }
  onOn() {
    console.log("every appareil is ON")
  }
}


