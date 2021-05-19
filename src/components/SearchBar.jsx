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

const mapStateToProps = (state) => ({
  favouritesLength: state.favourites.length,
});

const SearchBar = ({ searchJobs, favouritesLength }) => {
  let history = useHistory();

  const [fields, setFields] = useState({ position: "", area: "" });
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFields({ ...fields, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchJobs(fields.position, fields.area);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-end">
        <Button
          variant="primary"
          onClick={() => history.push("/favourites")}
          className="rounded-pill me-3"
        >
          💖 <span className="me-2"> Favourites</span>
          {favouritesLength > 0 && <Badge>{favouritesLength}</Badge>}
        </Button>
        <Form onSubmit={handleSubmit} className="d-flex">
          <FormControl
            onChange={handleChange}
            value={fields.position}
            type="text"
            placeholder="Insert Position"
            className="mr-2"
            name="position"
          />
          <FormControl
            onChange={handleChange}
            value={fields.area}
            type="text"
            placeholder="Insert Location"
            className="mx-2"
            name="area"
          />
          <Button type="submit" variant="outline-info" className="ml-2">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps)(SearchBar);
