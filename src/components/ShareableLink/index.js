import { Dialog, DialogTitle } from "@material-ui/core";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ShareableLink = (props) => {
  const { onClose, selectedValue, open, title, imageUrl } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  useEffect(() => {
    window.localStorage.setItem(title, imageUrl);
  }, [title, imageUrl]);

  return (
    <Dialog onClose={handleClose} aria-labelledby="shareable-link" open={open}>
      <DialogTitle id="image-title">
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
        target="_blank"
        rel="noopener noreferrer"
      >
        {`${window.location.href}${title}`}
      </Link>
    </Dialog>
  );
};

export default ShareableLink;
