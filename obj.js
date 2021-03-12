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



/*EXAMPLE BOOK*/
const testBook = new Book('The Giver','Lois Lowry','240',false);
addBookToLibrary(testBook);
buildTable(myLibrary);

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
                        <td id=${i}>${data[i].read}</td>
                        <td><button type="button" class="toggle" >Toggle Read Status</button></td>
                   </tr>`     
        table.innerHTML+=row;
    }
}



function toggleRead(id){
    if(myLibrary[id].read){
        myLibrary[id].read=false;
    }else{
        myLibrary[id].read=true;
    }

    var item = document.getElementById("myTable");

    item.rows[id].cells[3].innerHTML=myLibrary[id].read;
}

const toggleButton=document.getElementsByClassName('toggle');
for(let i=0;i<toggleButton.length;i++){
    toggleButton[i].addEventListener('click',function(){
        console.log(i);
        toggleRead(i);
    });
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
    const toggleButton=document.getElementsByClassName('toggle');
    for(let i=toggleRead.length-1;i<toggleButton.length;i++){
        toggleButton[i].addEventListener('click',function(){
            console.log(i);
            toggleRead(i);
        });
    }
    closeForm();
});




