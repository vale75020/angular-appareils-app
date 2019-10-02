export class AppareilService {
    appareils = [
        { name: "Washing Machine", status: "Off" },
        { name: "TV", status: "Off" },
        { name: "PC", status: "On" },
      ];

      switchOnAll() {
          for(let appareil of this.appareils) {
              appareil.status = "On"
          }
      }

      switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = "Off"
        }
    }

    switchOnOne(index: number) {
        this.appareils[index].status = "On"
    }

    switchOffOne(index: number) {
        this.appareils[index].status = "Off"
    }
}