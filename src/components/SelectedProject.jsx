import React from "react";
import Button from "./Button";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDeleteProject,
  tasks,
  onAddTask,
  onDeleteTask,
  onToggleTask,
}) {
  const dueDate = new Date(`${project.dueDate}T00:00:00`);
  const formattedDate = dueDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dayDifference = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
  const dueLabel =
    dayDifference < 0
      ? `${Math.abs(dayDifference)} day${Math.abs(dayDifference) === 1 ? "" : "s"} overdue`
      : dayDifference === 0
        ? "Due today"
        : `Due in ${dayDifference} day${dayDifference === 1 ? "" : "s"}`;
  const dueColor =
    dayDifference < 0
      ? "bg-red-100 text-red-700"
      : dayDifference <= 3
        ? "bg-amber-100 text-amber-700"
        : "bg-stone-200 text-stone-700";
  const status = project.status || "Active";
  const priority = project.priority || "Medium";
  const priorityColor =
    priority === "High"
      ? "bg-red-100 text-red-700"
      : priority === "Low"
        ? "bg-green-100 text-green-700"
        : "bg-amber-100 text-amber-700";

  return (
    <main className="mx-4 my-8 w-auto md:mx-0 md:my-16 md:w-[35rem] md:max-w-[calc(100vw-22rem)]">
      <header className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <div className="h-2 bg-gradient-to-r from-stone-700 via-stone-500 to-amber-400" />
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                Project overview
              </p>
              <h1 className="break-words text-3xl font-bold leading-tight text-stone-800">
                {project.title}
              </h1>
            </div>
            <Button onClick={() => onDeleteProject(project.id)}>Delete</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
              {status}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColor}`}>
              {priority} priority
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${dueColor}`}>
              {dueLabel}
            </span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-stone-500">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>Due {formattedDate}</span>
          </div>
          <p className="mt-5 whitespace-pre-wrap border-l-2 border-stone-200 pl-4 leading-7 text-stone-600">
            {project.description}
          </p>
        </div>
      </header>
      <section className="mt-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <Tasks
          onAdd={onAddTask}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
          tasks={tasks}
        />
      </section>
    </main>
  );
}
