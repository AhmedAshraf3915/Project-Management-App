import noImage from "../assets/no-projects.png";

import Button from "./Button.jsx";
import React from "react";

export default function NoProject({ onCreateProject }) {
  return (
    <div className="mx-4 flex w-auto flex-col items-center space-y-4 py-12 text-center md:ml-24 md:w-2/3 md:py-16">
      <img
        src={noImage}
        alt="An empty list"
        className="h-24 w-24 object-cover"
      />
      <h2 className="text-2xl">Create a projet to get started</h2>
      <Button onClick={onCreateProject}>Create new project</Button>
    </div>
  );
}
