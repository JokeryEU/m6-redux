import { Col, Container, Row, ListGroup, Button, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { removeFavourite } from "../actions";

const mapStatetoProps = (state) => ({
  favoriteList: state.favourites.favoriteList,
});

const Favourites = ({ favoriteList, removeFavourite }) => {
  const history = useHistory();
  const handleRemoveFavorite = (id) => {
    removeFavourite(id);
  };

  return (
    <Container className="min-vh-100">
      <Row className="justify-content-center">
        <Col>
          {favoriteList.length === 0 && (
            <div className="text-center">
              <Button
                variant="secondary"
                onClick={() => history.push("/")}
                className="rounded-circle mt-5"
              >
                Home
              </Button>
              <h1 className="text-center text-white mt-5">
                No favorites yet, add some!
              </h1>
            </div>
          )}
          <ListGroup className="mt-5">
            <h1 className="text-center mb-5" style={{ color: "#d1cdc7" }}>
              FAVOURITES
            </h1>
            {favoriteList.map((fav) => (
              <ListGroup.Item key={fav.id} className="d-flex lh-lg">
                <span className="me-auto">
                  {fav.title} - {fav.company}
                </span>

                <span
                  onClick={() => handleRemoveFavorite(fav.id)}
                  style={{ cursor: "pointer" }}
                  className="me-3"
                >
                  💔
                </span>

                <Badge
                  onClick={() => history.push(`/details/${fav.id}`)}
                  style={{ cursor: "pointer" }}
                  className="bg-secondary lh-lg"
                >
                  Details
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStatetoProps, { removeFavourite })(Favourites);
