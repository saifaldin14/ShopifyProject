import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ShareableLink = (props) => {
  const { onClose, selectedValue, open, title, imageUrl } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    onClose(selectedValue);
  };

  const copyText = () => {
    navigator.clipboard.writeText(`${window.location.href}${title}`);
    alert("Successfully copied image URL to clipboard");
    handleClose();
  };

  useEffect(() => {
    window.localStorage.setItem(title, imageUrl);
  }, [title, imageUrl]);

  return (
    <Dialog
      fullScreen={fullScreen}
      onClose={handleClose}
      aria-labelledby="shareable-link"
      open={open}
    >
      <DialogTitle id="image-title">
        Access Shareable Link for the Image
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          We have successfully created a shareable link for this image. You can
          use this link to view the image and share it to an external social
          media platform.
        </DialogContentText>
        <DialogContentText>
          Image URL: {`${window.location.href}${title}`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
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
            style={{ textDecoration: "none" }}
          >
            Visit Link
          </Link>
        </Button>
        <Button onClick={copyText} color="primary" autoFocus>
          Copy Link
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShareableLink;
