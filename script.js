// list of books
let myLibrary = [];

// Book object
function Book(name, author, pages, read, id) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

// Update Library
function addBookToLibrary(n, a, p, r, id=myLibrary.length) {
    let book = new Book(n,a,p,r,id);
    myLibrary.push(book);
    createBookCard(n,a,p,r,id);
}

// Create a book card to be displayed 
function createBookCard(n,a,p,r,id){

    // select main
    const container = document.getElementById("container");

    // create DOM elements
    let card = document.createElement("div");
    let pName = document.createElement("p");
    let pAuthor = document.createElement("p");
    let pPages = document.createElement("p");
    let readBtn = document.createElement("button");
    let removeBtn = document.createElement("button");
  
    // add classes 
    card.classList.add("card");
    card.id = `${id}`;
    pName.classList.add("name");
    pAuthor.classList.add("author");
    pPages.classList.add("pages");
    readBtn.classList.add("card-btn");
    readBtn.classList.add("read-status");
    removeBtn.classList.add("card-btn");
    removeBtn.classList.add("remove-btn");

    // append new elements
    container.appendChild(card);
    card.appendChild(pName);
    card.appendChild(pAuthor);
    card.appendChild(pPages);
    card.appendChild(readBtn);
    card.appendChild(removeBtn);

    // display text
    pName.innerText = `"${n}"`;
    pAuthor.innerText = `by ${a}`;
    pPages.innerText = `${p} pages`;
    removeBtn.innerText = "REMOVE";

    // change Read status
    readBtn.onclick = function() {
        if (r) {
            myLibrary[id].read = false;
            r = false;
            displayReadFunction(r,readBtn);
        } else {
            myLibrary[id].read = true;
            r = true;
            displayReadFunction(r,readBtn);
        }
    }

    // Read status display
    function displayReadFunction(r,b) {
        if (r) {
            b.innerText = "READ";
            b.style.background = "#3CB372";
        } else {
            b.innerText = "NOT READ";
            b.style.background = "#23717D";
        }
    }
    displayReadFunction(r,readBtn);

    removeBtn.onclick = function() {
        myLibrary.splice(id);
        card.remove();
    }
}

// Open New Book FORM
const newBookBtn = document.getElementById("new-book");
const newBookForm = document.getElementById("new-book-form");

newBookBtn.onclick = function() {
    newBookForm.style.display = "flex";
}

// Close New Book FORM
const closeBtn = document.getElementById("close-btn");

closeBtn.onclick = function() {
    newBookForm.style.display = "none";
}

// Click SUBMIT button
let submitBtn = document.getElementById("submit-btn");
let form = document.getElementById("new-book-form");

form.onsubmit = function(event) {

    event.preventDefault();

    let nameInput = document.getElementById("name-input").value;
    let authorInput = document.getElementById("author-input").value;
    let pagesInput = document.getElementById("pages-input").value;
    let readInput = document.getElementById("read-input").checked;

    addBookToLibrary(nameInput, authorInput, pagesInput, readInput);

    
    newBookForm.style.display = "none";
    form.reset();
};
