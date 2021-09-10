import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    marginBottom: "2rem",
  },
  header: {
    background: "-webkit-linear-gradient(#0066ff, #00ccff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  like: {
    color: red[500],
  },
  unlike: {
    color: grey[500],
  },
}));

export const CustomColor = withStyles({
  root: {
    background: "-webkit-linear-gradient(#ff9966, #ff33cc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
})(Typography);
