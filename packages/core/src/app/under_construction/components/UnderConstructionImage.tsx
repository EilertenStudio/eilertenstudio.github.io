import '../style.css'

import React from "react";

export default function UnderConstructionImage() {
  return (
    <div className={"under-construction_image"}>
      <span className={"emoji"} aria-hidden>🚧</span>
      <h1 className={"title"}>Under Construction</h1>
    </div>
  );
}