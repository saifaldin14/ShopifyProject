import logo from "./logo.svg";
import "./App.css";

import { getNasaAction } from "./actions/getNasaData";
import { connect } from "react-redux";
import Feed from "./components/Feed";

const App = (props) => {
  const onGetNasaData = () => {
    props.getNasaData();
  };

  return (
    <div className="App">
      {!props.getNasaData.isLoading ? (
        <Feed nasaData={props.nasaData.data} />
      ) : (
        <p>Loading</p>
      )}
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
