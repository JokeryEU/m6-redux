import Job from "./Jobs";
import { Button } from "react-bootstrap";
import { fetchJobs } from "../actions/jobs";
import { connect } from "react-redux";

const Joblist = ({ jobs }) => {
  return (
    <>
      <h1 style={{ color: "#d1cdc7" }} className="mx-3">
        Jobs
      </h1>
      {jobs.map((job) => (
        <Job key={job.id} {...job} job={job} />
      ))}
      {jobs.length === 0 && (
        <Button onClick={fetchJobs} variant="info" className="mb-3">
          No results...
        </Button>
      )}
    </>
  );
};

export default connect(null, { fetchJobs })(Joblist);
