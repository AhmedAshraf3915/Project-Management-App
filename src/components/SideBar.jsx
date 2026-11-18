import React, { useState } from "react";
import Button from "./Button";

export default function SideBar({ onCreateProject, projects, onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <aside className="flex w-full flex-col gap-5 bg-stone-800 px-6 py-6 text-gray-100 md:min-h-screen md:w-72 md:px-12 md:py-8">
      <h2 className="text-2xl">Your Projects</h2>
      <Button onClick={onCreateProject}>+ Add Project</Button>
      {projects.length > 0 && (
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search projects"
          className="w-full rounded-sm bg-stone-700 px-3 py-2 text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400"
        />
      )}
      <ul className="list-none space-y-2">
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <button
              className="w-full rounded-sm px-3 py-2 text-left hover:bg-stone-700"
              onClick={() => onSelect(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
      {projects.length > 0 && filteredProjects.length === 0 && (
        <p className="text-sm text-stone-400">No matching projects.</p>
      )}
    </aside>
  );
}
