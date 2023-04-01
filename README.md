# Doogle-Keep-App
*Trying to make Clone of google keep app with the help of html-css-javascript and used localstorage also to store the data. 
This application can basically add the notes, delete them, edit and save those notes.*

## 🔗 Link : shra2703.github.io/Doogle-Keep-App/

![Screenshot (170)](https://user-images.githubusercontent.com/113618935/229310114-f915679f-2fa1-4b4a-8ede-e51db88ccfb6.png)

## 💻 Functionality:

  1)***Adding the note with the help of ADD NOTE BUTTON.***
  
  ![Screenshot (171)](https://user-images.githubusercontent.com/113618935/229310352-37623e24-8ca7-4cf4-9a79-f243b2236923.png)

  2)***Writeing anything and saving the text with the help of SAVE BUTTON and again by Clicking the same save button we can edit the saved text.***
  
  ![Screenshot (172)](https://user-images.githubusercontent.com/113618935/229310434-0c60b5b3-9184-4a8f-bc80-a07b46eb1226.png)
  
  3)***Can also delete the saved text with the delete button at top.***
  
  ![Screenshot (173)_LI](https://user-images.githubusercontent.com/113618935/229310605-90e053d8-0ecb-43ef-b5ee-a32f907556c4.jpg)
 
## 💾 Storage: 
***LocalStorage is used for storing the data***
```
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
```

```
// getting data from the local storage
const notes = JSON.parse(localStorage.getItem('notes'));

  if(notes) {
      notes.forEach((note) => addNewNote(note));
  }
});
```


