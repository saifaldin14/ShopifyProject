import { withRouter, useLocation } from "react-router-dom";

const ImageComponent = (props) => {
  console.log(props.match.params);
  const location = useLocation();
  console.log(location.state);
  // const { imageUrl } = location.state;
  const { imageUrl } = location.state;
  return (
    <div>
      <img src={imageUrl} alt="" />
    </div>
  );
};
export default withRouter(ImageComponent);
