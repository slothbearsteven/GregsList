import Car from "../Models/Car.js";

let _carApi = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/cars'
})


//Private
let _state = {
    cars: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    cars: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class CarService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get Cars() {
        return _state.cars.map(c => new Car(c))
    }




    getApiCars() {
        _carApi.get()
            .then(res => {
                let carsData = res.data.data.map(c => new Car(c))
                _setState('cars', carsData)
            })
            .catch(err => {
                console.error(err)
            })
    }
}
