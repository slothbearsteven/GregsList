import CarService from "../Services/CarService.js";

//Private
let _cs = new CarService()

function _draw() {
    let cars = _cs.Cars
    let template = ''
    cars.forEach(c => template += c.Template)
    document.getElementById('cars-cards').innerHTML = template
}

//Public
export default class CarController {
    constructor() {
        //NOTE Register all subscribers
        _cs.addSubscriber('cars', _draw)

        //NOTE Retrieve data
        _cs.getApiCars();
    }
}