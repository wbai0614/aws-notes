const apiUrl = "https://y4xkbjeys0.execute-api.us-east-1.amazonaws.com/prod/notes";

// Fetch and display all notes
async function fetchNotes() {
    try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const notes = await res.json();

        const notesContainer = document.getElementById("notesContainer");
        notesContainer.innerHTML = "";

        notes.forEach(note => {
            const noteDiv = document.createElement("div");
            noteDiv.className = "note";
            noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <button onclick='deleteNote("${note.id}")'>Delete</button>
                <button onclick='editNote("${note.id}", "${note.title}", "${note.content}")'>Edit</button>
            `;
            notesContainer.appendChild(noteDiv);
        });
    } catch (err) {
        console.error("Error fetching notes:", err);
    }
}

// Add a new note
async function addNote(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content })
        });
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        await res.json();
        document.getElementById("noteForm").reset();
        fetchNotes();
    } catch (err) {
        console.error("Error adding note:", err);
    }
}

// Delete a note
async function deleteNote(id) {
    try {
        const res = await fetch(`${apiUrl}?id=${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        await res.json();
        fetchNotes();
    } catch (err) {
        console.error("Error deleting note:", err);
    }
}

// Edit a note
function editNote(id, title, content) {
    document.getElementById("title").value = title;
    document.getElementById("content").value = content;

    const saveBtn = document.getElementById("saveBtn");
    saveBtn.style.display = "inline";
    const addBtn = document.getElementById("addBtn");
    addBtn.style.display = "none";

    saveBtn.onclick = async function () {
        await updateNote(id);
        saveBtn.style.display = "none";
        addBtn.style.display = "inline";
        document.getElementById("noteForm").reset();
        fetchNotes();
    };
}

// Update a note
async function updateNote(id) {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    try {
        const res = await fetch(`${apiUrl}?id=${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content })
        });
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        await res.json();
    } catch (err) {
        console.error("Error updating note:", err);
    }
}

// Initialize
document.getElementById("noteForm").addEventListener("submit", addNote);
fetchNotes();
