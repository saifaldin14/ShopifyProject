import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import { useStyles } from "./styles";

const Feed = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({
    title: "",
    date: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    setData(props.nasaData);
  }, [props.nasaData]);

  return (
    <div>
      <CardComponent
        title={data.title}
        date={data.date}
        description={data.description}
        imageUrl={data.url}
      />
    </div>
  );
};

export default Feed;
