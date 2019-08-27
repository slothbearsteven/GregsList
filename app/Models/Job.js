
export default class Job {
  constructor(data) {
    console.log('job formed')
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }
  get Template() {
    return `
      <div class="col-4 card">
      <div class="card-body">
        <h1 class"card-title">${this.jobTitle}</h1>
        <h3 class="card-text">Company:${this.company}</h3>
        <h3 class="card-text">Hours:${this.hours}</h3>
        <h3 class="card-text">Rate:${this.rate}</h3>
        <h3 class="card-text">Description:${this.description}</h3>

      <button class="btn btn-danger" onclick = "app.controllers.jobCtrl.deleteJob('${this._id}')"> Delete Job</button >
      
      </div >

      </div >
      </div >
    `
  }
}

