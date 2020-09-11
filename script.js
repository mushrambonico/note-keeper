const newNoteForm = document.getElementById('new-note-form');
const newProjectForm = document.getElementById('new-project-form');
const createProject = function(title, description) {
    const noteArray = [];
    const addNote = function(title, content) {
        const newNote = createNote(title, content);
        noteArray.push(newNote);
        return newNote;
    }
    return {
        title,
        description,
        addNote,
    }
};
const createNote = function(title, content) {
    return {
        title,
        content,
    }
};
const userProjects = (function() {
    const projectArray = [];
    const addProject = function(title, description) {
        const newProject = createProject(title, description);
        projectArray.push(newProject);
        return newProject;
    }
    const defaultProject = addProject('default', 'default');
    return {
        addProject,
        defaultProject,
    }
})();
const renderNote = function(note) {
    const content = document.getElementById('content-card');
    const noteHeader = document.createElement('h2');
    const noteContent = document.createElement('p');
    noteHeader.innerText = note.title;
    noteContent.innerText = note.content;
    content.append(noteHeader, noteContent);
};
const renderProject = function(project) {
    const projectsList = document.getElementById('projects-list');
    const projectLi = document.createElement('li');
    projectLi.innerText = project.title;
    projectLi.title = project.description;
    projectsList.append(projectLi);
};
newNoteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const noteTitle = document.getElementById('title').value;
    const noteContent = document.getElementById('content').value;
    const defaultProject = userProjects.defaultProject;
    const newNote = defaultProject.addNote(noteTitle, noteContent);
    renderNote(newNote);
});
newProjectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const projectTitle = document.getElementById('project-title').value;
    const projectDescription = document.getElementById('project-description').value;
    const newProject = userProjects.addProject(projectTitle, projectDescription);
    renderProject(newProject);
});


