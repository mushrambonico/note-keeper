const newNoteForm = document.getElementById('new-note-form');
const newProjectForm = document.getElementById('new-project-form');
const createProject = function(id, title, description) {
    let noteIdCounter = 0;
    const noteArray = [];
    const addNote = function(title, content) {
        const newNote = createNote(id=noteIdCounter, title, content);
        noteArray.push(newNote);
        noteIdCounter += 1;
        return newNote;
    }
    return {
        id,
        title,
        description,
        addNote,
    }
};
const createNote = function(id, title, content) {
    return {
        id,
        title,
        content,
    }
};
const userProjects = (function() {
    let projectIdCounter = 0;
    const projectArray = [];
    const addProject = function(title, description) {
        const newProject = createProject(id=projectIdCounter, title, description);
        projectArray.push(newProject);
        projectIdCounter += 1;
        return newProject;
    };
    const defaultProject = addProject('default', 'default');
    const getProjectById = function(id) {
        for (let i = 0; i < projectArray.length; i ++) {
            if (projectArray[i].id == id) {
                return projectArray[i];
            }
        }
        return false;
    };
    return {
        addProject,
        defaultProject,
        getProjectById,
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


