import { useState } from "react";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleCreateProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(project) {
    const projectId = Math.random();
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, { ...project, id: projectId }],
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== id,
        ),
        tasks: prevState.tasks.filter((task) => task.projectId !== id),
      };
    });
  }
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddTask(taskText) {
    const taskId = Math.random();
    const newTask = {
      id: taskId,
      text: taskText,
      projectId: projectsState.selectedProjectId,
      completed: false,
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  function handleToggleTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task,
        ),
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );
  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId,
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onToggleTask={handleToggleTask}
      tasks={selectedProjectTasks}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onCreateProject={handleCreateProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={() => handleSelectProject(undefined)}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-stone-100 md:flex-row md:gap-10">
      <SideBar
        onCreateProject={handleCreateProject}
        projects={projectsState.projects}
        onSelect={handleSelectProject}
      />
      {content}
    </div>
  );
}

export default App;
