import Job from "../Models/Job.js";

// @ts-ignore
let _jobApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jobs'
})


let _state = {
  jobs: []
}

let _subscribers = {
  jobs: []
}

function _setState(propName, data) {
  //NOTE add the data to the state
  _state[propName] = data
  //NOTE run every subscriber function that is watching that data
  _subscribers[propName].forEach(fn => fn());
}

export default class JobService {
  constructor() {
    console.log("jobserve says hi")
  }
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  getApijobs() {
    _jobApi.get()
      .then(res => {
        let jobsData = res.data.data.map(j => new Job(j))
        _setState('jobs', jobsData)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addJob(data) {
    _jobApi.post('', data)
      .then(res => {
        // this.getApiCars()
        _state.jobs.push(res.data.data)
        _setState('jobs', _state.jobs)
      })
      .catch(err => {
        console.error(err)
      })
  }


  deleteJob(id) {
    _jobApi.delete(id)
      .then(res => {
        let index = _state.jobs.findIndex(job => job._id == id)
        _state.jobs.splice(index, 1)
        _setState('jobs', _state.jobs)
      })
      .catch(err => {
        console.error(err)
      })
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }
}

