import { Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { addFavourite, removeFavourite } from "../actions/index";

const mapStateToProps = (state) => ({
  favoriteList: state.favourites.favoriteList,
});

const Jobs = ({
  title,
  company,
  type,
  location,
  id,
  created_at,
  favoriteList,
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
  const history = useHistory();
  return (
    <Col xs={12}>
      <div className="d-flex border-bottom justify-content-between py-4 px-3 mb-3">
        <div>
          <Link style={{ color: "#72ff72" }} to={`/details/${id}`}>
            {title}
          </Link>
          {favoriteList.some((job) => job.id === id) ? (
            <>
              <span
                className="ms-2"
                onClick={handleRemoveFavorite}
                style={{ cursor: "pointer" }}
              >
                ✰
              </span>
              <Badge
                onClick={() => history.push(`/details/${id}`)}
                style={{ cursor: "pointer", background: "#228800" }}
                className="lh-base ms-3 rounded-pill"
              >
                Details
              </Badge>
            </>
          ) : (
            <>
              <span
                className="ms-2"
                onClick={handleAddFavorite}
                style={{ cursor: "pointer" }}
              >
                ⭐
              </span>
              <Badge
                onClick={() => history.push(`/details/${id}`)}
                style={{ cursor: "pointer", background: "#228800" }}
                className="lh-base ms-3 rounded-pill"
              >
                Details
              </Badge>
            </>
          )}
          <p className="mb-0" style={{ color: "#d1cdc7" }}>
            {company} - <span style={{ color: "#d1cdc7" }}>{type}</span>
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end">
          <p className="mb-0" style={{ color: "#d1cdc7" }}>
            {location}
          </p>
          <p className="mb-0" style={{ color: "#d1cdc7" }}>
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
