import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    task: [],
  });

  function handleAddTask(text) {
    const taskId = Math.random();
    const newTask = {
      text: text,
      projectId: projectState.selectedProjectId,
      id: taskId,
    };
    setProjectState((prev) => {
      return {
        ...prev,
        task: [newTask, ...prev.task]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prev=>{
      return {
        ...prev,
        task: prev.task.filter(task=>task.id !== id)
      }
    })
  }

  function handleSelectProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== projectState.selectedProjectId
        ),
      };
    });
  }

  function handleAddProject(projectData) {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.task}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId = {projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
