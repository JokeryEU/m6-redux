import { connect } from "react-redux";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => {
    dispatch({ type: "INCREMENT" });
  },
  decreaseCounter: () => {
    dispatch({ type: "DECREMENT" });
  },
});

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={props.increaseCounter}>INCREASE</Button>
        <p>{props.count}</p>
        <Button variant="secondary" onClick={props.decreaseCounter}>
          DECREASE
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
