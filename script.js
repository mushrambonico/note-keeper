const newNoteForm = document.getElementById('new-note-form');
const createProject = function(title, description) {
    const noteArray = [];
    const addNote = function(title, content) {
        const newNote = createNote(title, content);
        noteArray.push(newNote);
        return newNote;
    }
    return {
        title,
        content,
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
        const newProject = createProject(title, content);
        projectArray.push(newProject);
        return newProject;
    }
    const defaultProject = addProject('default', 'default');
    return {
        addProject,
        defaultProject,
    }
})();
newNoteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const noteTitle = document.getElementById('title').value;
    const noteContent = document.getElementById('content').value;
    const defaultProject = userProjects.defaultProject;
    const newNote = defaultProject.addNote(noteTitle, noteContent);
    console.log(defaultProject);
    console.log(newNote);
});