import { withRouter } from "react-router-dom";

const ImageComponent = (props) => {
  //Get the image URL saved in local storage
  const imageUrl = window.localStorage.getItem(props.match.params.title);
  return (
    <div>
      <img src={imageUrl} alt="" />
    </div>
  );
};
export default withRouter(ImageComponent);
