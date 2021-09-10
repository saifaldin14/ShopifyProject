import "./App.css";
import { getNasaAction } from "./actions/getNasaData";
import { getNasaDateAction } from "./actions/getNasaDataWithDates";
import { connect } from "react-redux";
import Feed from "./components/Feed";
import DatePicker from "./components/DatePicker";
import Lottie from "react-lottie";
import { default as animationData } from "./assets/lotties/loading.json";

const App = (props) => {
  const onGetNasaData = (startDate, endDate) => {
    props.getNasaDataWithDate(startDate, endDate);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <h1>Space-tagram!</h1>
      {!props.isLoading ? (
        <>
          <DatePicker onGetNasaData={onGetNasaData} />
          <Feed nasaData={props.nasaData.data} />
        </>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  const nasaData = state.getNasaData;
  const isLoading = state.getNasaData.isLoading;
  console.log(state.getNasaData.isLoading);

  return {
    nasaData,
    isLoading,
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
