import { useState } from "react";
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchJob } from "../actions/jobs";

const mapStateToProps = (state) => ({
  favouritesLength: state.favourites.favoriteList.length,
});

const SearchBar = ({ searchJob, favouritesLength }) => {
  let history = useHistory();

  const [fields, setFields] = useState({ position: "", area: "" });
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFields({ ...fields, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchJob(fields.position, fields.area);
  };

  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container className="justify-content-end">
        <Button
          variant="primary"
          onClick={() => history.push("/favourites")}
          className="rounded-pill me-3 py-1"
        >
          💖 <span className="me-2"> Favourites</span>
          <Badge className="fs-6">{favouritesLength}</Badge>
        </Button>
        <Form onSubmit={handleSubmit} className="d-flex">
          <FormControl
            onChange={handleChange}
            value={fields.position}
            type="text"
            placeholder="Add Job Title"
            className="mr-2 text-white"
            name="position"
            style={{ backgroundColor: "#181a1b" }}
          />
          <FormControl
            onChange={handleChange}
            value={fields.area}
            type="text"
            placeholder="Add City"
            className="mx-2 text-white"
            name="area"
            style={{ backgroundColor: "#181a1b" }}
          />
          <Button type="submit" variant="outline-info" className="ml-2">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps, { searchJob })(SearchBar);
