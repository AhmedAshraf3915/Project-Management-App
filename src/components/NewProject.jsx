import React, { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();
  const [status, setStatus] = useState("Active");
  const [priority, setPriority] = useState("Medium");
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      !enteredTitle.trim() ||
      !enteredDescription.trim() ||
      !enteredDueDate.trim()
    ) {
      dialog.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      status,
      priority,
    });
  }
  return (
    <>
      <Modal buttonCaption="Okay" ref={dialog}>
        <h2 className="text-xl font-bold text-stone-700 mb-3">
          Invalid Project Data
        </h2>
        <p className="text-stone-600">
          Please enter valid data in each field.
        </p>
      </Modal>
      <div className="mx-4 my-8 w-auto space-y-4 md:ml-24 md:w-[560px]">
        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            className="text-stone-700 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-stone-700 text-stone-200 px-4 py-2 rounded-sm hover:bg-stone-900 transition"
          >
            Save
          </button>
        </div>
        <div>
          <Input ref={title} label="title" type="text" />
          <Input ref={description} label="description" textarea />
          <Input ref={dueDate} label="dueDate" type="date" />
          <div className="my-4 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold uppercase text-stone-500">
                Status
              </label>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 p-2 text-stone-600 focus:border-stone-600 focus:outline-none"
              >
                <option>Active</option>
                <option>On Hold</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold uppercase text-stone-500">
                Priority
              </label>
              <select
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
                className="w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 p-2 text-stone-600 focus:border-stone-600 focus:outline-none"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
