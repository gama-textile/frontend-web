import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Breadcum({ breadcumPath }) {
  return (
    <div>
      {breadcumPath.map((path, index) => {
        return (
          <Fragment key={index}>
            <Link to={path.url}> {path.name}</Link>
            {index === breadcumPath.length - 1 ? " " : " >> "}
          </Fragment>
        );
      })}
    </div>
  );
}
