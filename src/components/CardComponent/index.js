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
  const [expanded, setExpanded] = useState(false);
  const [likeClass, setLikeClass] = useState(() => {
    const stickyValue = window.localStorage.getItem(id);
    if (stickyValue !== null) {
      return stickyValue;
    } else {
      return "unlike";
    }
  });
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    localStorage.setItem(id, likeClass);
  }, [likeClass, id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        title={title}
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
