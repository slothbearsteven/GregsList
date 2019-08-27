import CarController from "./Controllers/CarController.js";


class App {
    constructor() {
        this.controllers = {
            carCtrl: new CarController()
        }
    }
}

window['app'] = new App()