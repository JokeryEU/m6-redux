import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { format } from "date-fns";
import { addFavourite, removeFavourite } from "../actions/index";

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

const Jobs = ({
  title,
  company,
  type,
  location,
  id,
  created_at,
  favourites,
  addFavourite,
  removeFavourite,
  job,
}) => {
  const handleAddFavorite = () => {
    addFavourite(job);
  };

  const handleRemoveFavorite = () => {
    removeFavourite(id);
  };

  return (
    <Col xs={12}>
      <div className="d-flex border-bottom justify-content-between py-2">
        <div>
          <Link style={{ color: "green" }} to={`/details/${id}`}>
            {title}
          </Link>
          {favourites.some((job) => job.id === id) ? (
            <span
              className="ms-2"
              onClick={handleRemoveFavorite}
              style={{ cursor: "pointer" }}
            >
              💔
            </span>
          ) : (
            <span
              className="ms-2"
              onClick={handleAddFavorite}
              style={{ cursor: "pointer" }}
            >
              💖
            </span>
          )}
          <p className="mb-0">
            {company} - <span>{type}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-right mb-0">{location}</p>
          <p className="text-right mb-0">
            {format(new Date(created_at), "MM/dd/yyyy")}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default connect(mapStateToProps, { addFavourite, removeFavourite })(
  Jobs
);
