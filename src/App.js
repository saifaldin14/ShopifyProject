import "./App.css";
import { getNasaAction } from "./actions/getNasaData";
import { getNasaDateAction } from "./actions/getNasaDataWithDates";
import { connect } from "react-redux";
import Feed from "./components/Feed";
import DatePicker from "./components/DatePicker";

const App = (props) => {
  const onGetNasaData = (startDate, endDate) => {
    props.getNasaDataWithDate(startDate, endDate);
  };

  return (
    <div className="App">
      {!props.getNasaData.isLoading ? (
        <>
          <DatePicker onGetNasaData={onGetNasaData} />
          <Feed nasaData={props.nasaData.data} />
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  const nasaData = state.getNasaData;
  console.log(state.getNasaDataWithDate);

  return {
    nasaData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNasaData: () => dispatch(getNasaAction()),
    getNasaDataWithDate: (startDate, endDate) =>
      dispatch(getNasaDateAction(startDate, endDate)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
