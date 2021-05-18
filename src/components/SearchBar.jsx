import { useState } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
const SearchBar = ({ searchJobs }) => {
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

export default SearchBar;
