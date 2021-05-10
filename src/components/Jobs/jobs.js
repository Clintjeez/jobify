import React from "react";
import "./jobs.css";
import defaultImage from "../../assets/icons/default.svg";

export default function jobs({ jobs }) {
  function calculateTime(jobDate) {
    let postDate = new Date(jobDate);
    let currentDate = new Date();
    let differentTime = Math.abs(currentDate - postDate);

    const diffDays = Math.ceil(differentTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.round(Math.ceil(currentDate - postDate) / 36e5);
    if (diffHours < 1) return `1h ago`;
    if (diffHours < 23) return `${diffHours}h ago`;
    if (diffHours >= 23) return `${diffDays}d ago`;
  }

  function checkImage(logo) {
    if (logo === null) {
      return defaultImage;
    } else {
      return logo;
    }
  }

  return (
    <>
      {jobs.map((job) => (
        <article className="job-wrapper" key={job.id}>
          <div className="job-logo">
            <img src={checkImage(job.company_logo)} alt="job" />
          </div>
          <div className="job-date">
            <p>{calculateTime(job.created_at)}</p>
            <p>{job.type}</p>
          </div>
          <h2 className="job-title">{job.title}</h2>
          <p className="job-company">{job.company}</p>
          <p className="job-location">{job.location}</p>
        </article>
      ))}
    </>
  );
}
