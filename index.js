const addBtn = document.getElementById('add');

// to set the item in the local Storage
const saveChanges = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note) => {
       return notes.push(note.value);
    })

    console.log(notes);

    localStorage.setItem('notes', JSON.stringify(notes));
}

// to add the div in the browser
const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    
    const htmlData = `
    <div class="operation">
        <button class="edit" ><i class="fas fa-edit"></i></button>
        <button class="delete" title = "delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "": "hidden"}"></div>
    <textarea class = "${text ? "hidden": ""}" title = "save"></textarea>
    `

    note.insertAdjacentHTML('afterbegin', htmlData);
    console.log(note);

    // getting the reference
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // deleting the button
    delButton.addEventListener('click', () => {
        note.remove();

        // the one which is delete will not show
        saveChanges();
    });


    //  toggle between the classes
    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    // when page is refresh 
    textArea.value = text;
    mainDiv.innerHTML = text;

    // to get the value of the textArea
    textArea.addEventListener('change', (event) =>{ 
        const value = event.target.value;
        console.log(value);
        mainDiv.innerHTML = value;

        // calling to set data in the Local storage
        saveChanges();

    });

    document.body.appendChild(note);

}



// getting data from the local storage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
    notes.forEach((note) => addNewNote(note));
}

// targeting the add button 
addBtn.addEventListener('click', () => addNewNote());