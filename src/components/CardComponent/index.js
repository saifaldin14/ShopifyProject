import React, { useState } from "react";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./styles";

const CardComponent = ({ title, date, description, imageUrl }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [likeClass, setLikeClass] = useState("unlike");
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            className={classes[likeClass]}
            onClick={() => changeButtonColor()}
          />
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
    </Card>
  );
};

export default CardComponent;
