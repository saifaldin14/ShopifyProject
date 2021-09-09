import logo from "./logo.svg";
import "./App.css";

import { getNasaAction } from "./actions/getNasaData";
import { connect } from "react-redux";

const App = (props) => {
  const onGetNasaData = () => {
    props.getNasaData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
};

function mapStateToProps(state) {
  const nasaData = state.getNasaData;

  return {
    nasaData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNasaData: () => dispatch(getNasaAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
