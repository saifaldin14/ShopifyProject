import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import { useStyles } from "./styles";

const Feed = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({ data: [{}, {}] });
  const [cardData, setCardData] = useState([
    { title: "", date: "", url: "", description: "" },
  ]);

  useEffect(() => {
    setData(props.nasaData);
  }, [props.nasaData]);

  // useEffect(() => {
  //   if (data !== []) {
  //     setCardData(data.data.near_earth_objects["2015-09-07"]);
  //   }
  // }, [data]);

  // console.log(data.data);

  //console.log(data.data.near_earth_objects[0]);
  return (
    <div>
      {data.data == null
        ? console.log("Please wait")
        : data.data.map((nasaObject, i) => {
            return (
              <CardComponent
                key={i}
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
