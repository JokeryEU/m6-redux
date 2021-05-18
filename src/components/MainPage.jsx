import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Joblist from "./Joblist";
import SearchBar from "./SearchBar";

const MainPage = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchJobs = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json`
      );
      if (res.ok) {
        setLoading(false);
        const data = await res.json();
        setJobs(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchJobs = async (position, area) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/jobs?description=${position}&location=${area}`
      );
      if (res.ok) {
        setLoading(false);
        const data = await res.json();
        setJobs(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <SearchBar searchJobs={searchJobs} />
      <Container className="min-vh-100">
        {(loading && (
          <Row className="justify-content-center mt-3">
            <Spinner animation="grow" />
          </Row>
        )) || (
          <Row className="mt-3">
            <Joblist jobs={jobs} />
          </Row>
        )}
      </Container>
    </>
  );
};

export default MainPage;
