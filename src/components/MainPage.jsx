import { useEffect } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import Joblist from "./Joblist";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { fetchJobs } from "../actions/jobs";

const mapStateToProps = (state) => state.jobs;

const MainPage = ({ jobList, loading, error, fetchJobs }) => {
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <>
      <SearchBar />
      <Container className="min-vh-100" style={{ position: "relative" }}>
        {(loading && (
          <Row className="justify-content-center mt-3">
            <Spinner animation="border" variant="info" />
          </Row>
        )) || (
          <>
            <Row className="mt-3">
              <Joblist jobs={jobList} />
            </Row>
            <Button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              variant="info"
              style={{ position: "absolute", bottom: "0", right: "-3vh" }}
              className=" lh-base d-block"
            >
              TOP
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default connect(mapStateToProps, { fetchJobs })(MainPage);
