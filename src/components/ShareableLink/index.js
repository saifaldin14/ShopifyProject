import { Dialog, DialogTitle } from "@material-ui/core";
import { Link } from "react-router-dom";

const ShareableLink = (props) => {
  const { onClose, selectedValue, open, title, imageUrl } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        Access Shareable Link for the Image
      </DialogTitle>
      <Link
        to={{
          pathname: `/${title}`,
          state: {
            imageUrl: `${imageUrl}`,
            title: `${title}`,
          },
        }}
      >
        {`${window.location.href}${title}`}
      </Link>
    </Dialog>
  );
};

export default ShareableLink;
