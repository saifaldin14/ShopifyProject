import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./styles";
import ShareableLink from "../ShareableLink";

const CardComponent = ({ id, title, date, description, imageUrl }) => {
  const classes = useStyles();
  //Whether or not the accordion is open
  const [expanded, setExpanded] = useState(false);

  //Gets the current class the like button has (liked or unliked)
  const [likeClass, setLikeClass] = useState(() => {
    //Get the state from local storage
    const localValue = window.localStorage.getItem(id);
    if (localValue !== null) {
      //There's already a state saved, return that one instead of the default
      return localValue;
    } else {
      //No saved state, default is unlike
      return "unlike";
    }
  });

  //Whether or not the shareable link dialog is open
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    //Update local storage with the state of the like button
    localStorage.setItem(id, likeClass);
  }, [likeClass, id]);

  /**
   * Function to open the shareable link dialog
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * Function to close the shareable link dialog
   * @param {*} value
   */
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  /**
   * Function to toggle the accordion to display or hide the explanation
   */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  /**
   * Function to change the state of the like state
   */
  const changeButtonColor = () => {
    if (likeClass === "unlike") {
      setLikeClass("like");
    } else {
      setLikeClass("unlike");
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // className={classes.header}
        title={<h5 className={classes.header}>{title}</h5>}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        component="div"
        alt=""
        image={imageUrl}
        title={title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={changeButtonColor}>
          <FavoriteIcon className={classes[likeClass]} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon onClick={() => handleClickOpen()} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Collapse>
      <ShareableLink
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        title={title}
        imageUrl={imageUrl}
      />
    </Card>
  );
};

export default CardComponent;
