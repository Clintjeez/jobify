import React from "react";
import "./body.css";
import Jobs from "../Jobs/jobs";

export default function body({ jobs }) {
  return (
    <section className=" container">
      <div className="jobs-wrapper">
        <Jobs jobs={jobs} />
      </div>
    </section>
  );
}
