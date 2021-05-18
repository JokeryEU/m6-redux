import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState({});
  const { id } = useParams();

  const fetchJob = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json/${id}.json`
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
    fetchJob();
  }, []);

  return (
    <Container className="min-vh-100">
      <Row className="mt-3 text-white">
        <Col xs={12}>
          {loading === true || jobs === "undefined" ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="grow" />
            </div>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: `${jobs.description}`,
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
