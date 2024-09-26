import React, { Component } from 'react';

class Jobrecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalJobsAppliedThisWeek: 0,
      totalJobsAppliedThisMonth: 0,
      totalInterviewsScheduled: 0,
      totalJobOffersReceived: 0
    };
  }

  // Function to fetch job data from an API
  componentDidMount() {
    // Replace the URL with your actual API endpoint
    fetch('https://api.example.com/job-records')
      .then(response => response.json())
      .then(data => {
        // Assuming the API returns an object with these fields
        this.setState({
          totalJobsAppliedThisWeek: data.jobsAppliedThisWeek,
          totalJobsAppliedThisMonth: data.jobsAppliedThisMonth,
          totalInterviewsScheduled: data.interviewsScheduled,
          totalJobOffersReceived: data.jobOffersReceived
        });
      })
      .catch(error => {
        console.error('Error fetching job records:', error);
      });
  }

  render() {
    const {
      totalJobsAppliedThisWeek,
      totalJobsAppliedThisMonth,
      totalInterviewsScheduled,
      totalJobOffersReceived
    } = this.state;

    return (
      <div>
        <section id='job_record_display'>
          <div className='display_record'>
            <p>Total Jobs Applied This Week:</p>
            <p>{totalJobsAppliedThisWeek}</p>
          </div>
          <div className='display_record'>
            <p>Total Jobs Applied This Month:</p>
            <p>{totalJobsAppliedThisMonth}</p>
          </div>
          <div className='display_record'>
            <p>Total Interviews Scheduled:</p>
            <p>{totalInterviewsScheduled}</p>
          </div>
          <div className='display_record'>
            <p>Total Job Offers Received:</p>
            <p>{totalJobOffersReceived}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Jobrecord;
