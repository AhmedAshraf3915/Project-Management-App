import React, { useState } from "react";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete, onToggle }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const completedCount = tasks.filter((task) => task.completed).length;
  const completionPercentage =
    tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
            Progress
          </p>
          <h2 className="text-2xl font-bold text-stone-800">Tasks</h2>
        </div>
        {tasks.length > 0 && (
          <div className="text-right">
            <span className="text-sm font-semibold text-stone-600">
              {completedCount}/{tasks.length} complete
            </span>
            <div className="mt-2 h-2 w-28 overflow-hidden rounded-full bg-stone-200">
              <div
                className="h-full rounded-full bg-amber-400 transition-all"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="rounded-xl bg-stone-50 p-4 ring-1 ring-stone-200">
        <NewTask onAdd={onAdd} />
      </div>
      {tasks.length > 0 && (
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search tasks"
          className="mt-4 w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 shadow-sm placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200"
        />
      )}
      {tasks.length === 0 ? (
        <p className="mt-5 rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-8 text-center text-sm text-stone-500">
          This project has no tasks yet. Add one above to get started.
        </p>
      ) : filteredTasks.length === 0 ? (
        <p className="mt-5 rounded-xl bg-stone-50 px-4 py-6 text-center text-sm text-stone-500">
          No matching tasks.
        </p>
      ) : (
        <ul className="mt-5 space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`group flex items-center justify-between gap-4 rounded-xl border px-4 py-3 transition ${
                task.completed
                  ? "border-stone-200 bg-stone-50"
                  : "border-stone-200 bg-white shadow-sm hover:border-stone-300 hover:shadow"
              }`}
            >
              <label className="flex min-w-0 flex-1 items-center gap-3">
                <input
                  type="checkbox"
                  checked={Boolean(task.completed)}
                  onChange={() => onToggle(task.id)}
                  className="h-5 w-5 rounded accent-stone-700"
                />
                <span
                  className={
                    task.completed
                      ? "truncate text-sm text-stone-400 line-through"
                      : "truncate text-sm font-medium text-stone-700"
                  }
                >
                  {task.text}
                </span>
              </label>
              <button
                type="button"
                className="shrink-0 rounded-md px-2 py-1 text-xs font-semibold text-stone-400 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
                onClick={() => onDelete(task.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
