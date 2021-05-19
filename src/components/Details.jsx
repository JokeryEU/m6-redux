import { useState, useEffect, useCallback } from "react";
import { Col, Container, Row, Spinner, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

const Details = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const fetchJob = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions/${id}.json`
      );
      if (res.ok) {
        setLoading(false);
        const data = await res.json();
        setJobs(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  return (
    <Container className="min-vh-100">
      <Row className="text-white">
        <Col xs={12} className="mt-4">
          <Button
            variant="secondary"
            onClick={() => history.push("/")}
            className="rounded-circle my-4"
          >
            Home
          </Button>
          {loading === true || jobs === "undefined" ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="info" />
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
