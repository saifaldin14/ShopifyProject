import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import { useStyles } from "./styles";

const Feed = (props) => {
  const [data, setData] = useState({ data: [{}, {}] });

  useEffect(() => {
    setData(props.nasaData);
  }, [props.nasaData]);

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
