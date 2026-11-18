# Project Management

A lightweight project and task management app built with React. Create projects, organize their tasks, and track progress from a simple responsive dashboard.

## Features

- Create projects with a title, description, due date, status, and priority.
- Browse and search projects from the sidebar.
- Select a project to view its overview and task list.
- Add, complete, search, and remove tasks.
- See project due-date indicators and task completion progress.
- Responsive layout for desktop and smaller screens.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- JavaScript (JSX)

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Usage

1. Select **Add Project** to create a project.
2. Enter the project details and save it.
3. Select the project from the sidebar.
4. Add tasks, mark them complete, or remove them as work progresses.
5. Use the project and task search fields to quickly find items.

## Data Storage

Project and task data is currently held in React state and is reset when the page is refreshed. Persistent storage can be added later with a backend or browser storage.

## Project Structure

```text
src/
├── components/
│   ├── NewProject.jsx
│   ├── NewTask.jsx
│   ├── SelectedProject.jsx
│   ├── SideBar.jsx
│   └── Tasks.jsx
├── App.jsx
├── index.css
└── main.jsx
```
