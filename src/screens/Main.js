import Feed from "../components/Feed";

const Main = (props) => {
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

export default Main;
