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

    addCar(e) {
        e.preventDefault();
        let form = e.target
        let data = {
            make: form.make.value,
            model: form.model.value,
            imgUrl: form.imgUrl.value,
            year: form.year.value,
            price: form.price.value,
            description: form.description.value
        }
        _cs.addCar(data)
        form.reset()

    }

    delete(id) {
        if (window.confirm('Are you sure?')) {
            _cs.deleteCar(id)
        }
    }
    bid(id) {
        _cs.bid(id)
    }


    carForm() {
        document.querySelector('#forms').innerHTML =
            `
    <form class="d-flex" onsubmit='app.controllers.carCtrl.addCar(event)'>
        <div class="form-group">
            <label for="make">Make</label>
            <input type="text" class="form-control" id="make" placeholder="Make" name="make"> <button
                class="btn btn-success" type="submit">Create</button>
                    </div>
            <div class="form-group">
                <label for="model">Model</label>
                <input type="text" class="form-control" id="model" placeholder="Model" name="model">
                    </div>
                <div class="form-group">
                    <label for="img">Image Url</label>
                    <input type="text" class="form-control" id="img" placeholder="Image Url..." name="imgUrl">
                    </div>
                    <div class="form-group">
                        <label for="year">Year</label>
                        <input type="number" class="form-control" id="year" placeholder="Year" name="year">
                    </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" id="price" placeholder="Price" name="price">
                    </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <input type="text" class="form-control" id="description" placeholder="Description"
                                    name="description"></textarea>
                            </div>
                </form>
                    `
    }









}