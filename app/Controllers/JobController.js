import JobService from "../Services/JobService.js";


let _jobservice = new JobService()

function draw() {
  let template = ''
  let jobs = _jobservice.Jobs

  jobs.forEach((job, ) => {
    template += job.Template

  })
  document.querySelector("#job-cards").innerHTML = template

}

export default class JobController {
  constructor() {
    console.log('job controller here!')
    _jobservice.addSubscriber('jobs', draw)

    //NOTE Retrieve data
    _jobservice.getApijobs();
  }
  addJob(event) {
    event.preventDefault()
    let form = event.target

    let data = {
      jobTitle: form.jobTitle.value,
      rate: form.rate.value,
      hours: form.hours.value,
      company: form.company.value,
      description: form.description.value
    }

    _jobservice.addJob(data)
    form.reset()
  }


  deleteJob(id) {
    if (window.confirm('Are you sure?')) {
      _jobservice.deleteJob(id)
    }
  }


  jobForm() {

    document.querySelector('#forms').innerHTML = `
    
    <form class="d-flex" onsubmit='app.controllers.jobCtrl.addJob(event)'>
  <div class="form-group">
    <label for="jobTitle">Job Title</label>
    <input type="text" class="form-control" id="jobTitle" placeholder="Job Title" name="jobTitle"> <button
      class="btn btn-success" type="submit">Create</button>
                    </div>
    <div class="form-group">
      <label for="company">Company</label>
      <input type="text" class="form-control" id="company" placeholder="Company name" name="company">
                    </div>
      <div class="form-group">
        <label for="hours">Hours</label>
        <input type="number" class="form-control" id="hours" placeholder="Hours" name="hours">
                    </div>
        <div class="form-group">
          <label for="rate">Rate</label>
          <input type="number" class="form-control" id="rate" placeholder="Rate" name="rate">
                    </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text" class="form-control" id="description" placeholder="Description"
                name="description"></textarea>
            </div>
                </form>  `

  }
}

