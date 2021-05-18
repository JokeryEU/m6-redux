import Job from "./Jobs";
const Joblist = ({ jobs }) => {
  return (
    <>
      <h1>Jobs</h1>
      {jobs.map((job) => (
        <Job key={job.id} {...job} />
      ))}
    </>
  );
};

export default Joblist;
