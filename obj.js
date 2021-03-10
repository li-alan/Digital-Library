let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read= read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function openForm(){
    document.getElementById("myForm").style.display="block";
}

function closeForm(){
    document.getElementById("myForm").style.display="none";
}

// FIX THIS
//////////////////////////////
//////////////////////////////
function buildTable(data){ 
    var table =document.getElementById('myTable')
    for( var i=data.length-1;i<data.length;i++){
        var row = `<tr>
                        <td>${data[i].title}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].pages}</td>
                        <td>${data[i].read}</td>
                        <td><button type="button" id=${i}>Toggle Read Status</button></td>
                   </tr>`
                   
        table.innerHTML+=row;
    }
}




/*
THIS IS FOR THE POP UP FORM
*/
const addBookButton=document.querySelector('.addBookButton');
addBookButton.addEventListener('click',openForm);

const closePopUpButton=document.querySelector('.closePopUpButton');
closePopUpButton.addEventListener('click',closeForm);

const submitButton=document.querySelector('.submitButton');
submitButton.addEventListener('click',()=>{
    let title=document.getElementById("Title").value;
    let author=document.getElementById("Author").value;
    let pages=document.getElementById("Pages").value;
    let read=document.getElementById("Read").checked;
    const bookToAdd=new Book(title,author,pages,read);
    addBookToLibrary(bookToAdd);
    buildTable(myLibrary);
    closeForm();
});




/*EXAMPLE BOOK*/
const testBook = new Book('The Giver','Lois Lowry','240',false);
addBookToLibrary(testBook);
buildTable(myLibrary);
