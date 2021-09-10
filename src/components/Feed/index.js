import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import { useStyles } from "./styles";

const Feed = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({ data: [{}, {}] });

  useEffect(() => {
    setData(props.nasaData);
  }, [props.nasaData]);

  return (
    <div className={classes.container}>
      {data.data == null
        ? console.log("Please wait")
        : data.data.map((nasaObject, i) => {
            return (
              <CardComponent
                key={i}
                id={i}
                title={nasaObject.title}
                date={nasaObject.date}
                description={nasaObject.explanation}
                imageUrl={nasaObject.url}
              />
            );
          })}
    </div>
  );
};

export default Feed;
