import React, { Component } from 'react';
import '../App.css';

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: 'Gbolahan ADEBOWALE',
      jobs: [], // Array to store job records
      newJob: '', // Field to store new job input
      isEditing: false,
      currentJobIndex: null // Index of the job being edited
    };
  }

  // Increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  // Decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  // Handle input change for new job
  handleInputChange = (event) => {
    this.setState({ newJob: event.target.value });
  };

  // Add a new job to the list
  addJob = () => {
    if (this.state.newJob !== '') {
      this.setState((prevState) => ({
        jobs: [...prevState.jobs, prevState.newJob],
        newJob: ''
      }));
    }
  };

  // Edit a job in the list
  editJob = (index) => {
    this.setState({
      isEditing: true,
      currentJobIndex: index,
      newJob: this.state.jobs[index]
    });
  };

  // Save edited job
  saveJob = () => {
    const { jobs, currentJobIndex, newJob } = this.state;
    jobs[currentJobIndex] = newJob;
    this.setState({
      jobs,
      isEditing: false,
      newJob: '',
      currentJobIndex: null
    });
  };

  // Delete a job from the list
  deleteJob = (index) => {
    const jobs = this.state.jobs.filter((job, i) => i !== index);
    this.setState({ jobs });
  };

  render() {
    const { count, name, jobs, newJob, isEditing } = this.state;

    return (
      <div className='mainsection'>
        <div>
          <section className='jobrecord'>Job Record</section>
          <section className='welcom-portal'>
            <h1>Welcome to {name}'s Job Tracker</h1>
            <p>Count - {count}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </section>

          {/* Job Tracker Table */}
          <section className='job-tracker'>
            <h2>Job Tracker</h2>
            <table className='job-table'>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.length > 0 ? (
                  jobs.map((job, index) => (
                    <tr key={index}>
                      <td>{job}</td>
                      <td>
                        <button onClick={() => this.editJob(index)}>Edit</button>
                        <button onClick={() => this.deleteJob(index)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='2'>No jobs added yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>

          {/* Job Add/Edit Form */}
          <section className='job-form'>
            <input
              type='text'
              value={newJob}
              placeholder='Enter job title'
              onChange={this.handleInputChange}
            />
            {isEditing ? (
              <button onClick={this.saveJob}>Save Job</button>
            ) : (
              <button onClick={this.addJob}>Add Job</button>
            )}
          </section>
        </div>
      </div>
    );
  }
}
