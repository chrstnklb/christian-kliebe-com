import React from "react";

export const RenderList = ({ descriptionList }) => (
  <ul>
    {descriptionList.map((animal) => (
      <li>{animal}</li>
    ))}
  </ul>
);
