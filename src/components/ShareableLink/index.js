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
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ShareableLink = (props) => {
  const { onClose, selectedValue, open, title, imageUrl } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    onClose(selectedValue);
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
          {`${window.location.href}${title}`}
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
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
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShareableLink;
