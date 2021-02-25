// DOM Elements
const container = document.getElementById("container");
const newBookBtn = document.getElementById("new-book");
const addNewBookForm = document.getElementById("add-new-book");
const closeBtn = document.getElementById("close-Btn");

// Press NEW BOOK button
newBookBtn.addEventListener("click", openNewBookForm);

// Book Form
function openNewBookForm() {
    addNewBookForm.style.display = "flex";
}

addNewBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Dom Elements
    let name = document.getElementById("book-name").value;
    let author = document.getElementById("author-name").value;
    let numOfPages = document.getElementById("page-num").value;
    let read = document.getElementById("if-read").checked;
    

    let book = new Book(name, author, numOfPages, read);
    addBookToLibrary(book);
    createBook(name, author, numOfPages);
    console.log(myLibrary)
    addNewBookForm.style.display = "none";
})

// Close Book Form
closeBtn.addEventListener("click", (e) => {
    addNewBookForm.style.display = "none";
})

// Create the Book Card 
function createBook(n, a, p) {
    const card = document.createElement("div");
    container.appendChild(card);
    card.classList.add("card")
    const name = document.createElement("p");
    name.classList.add("title")
    name.innerText = n;
    const author = document.createElement("p");
    author.classList.add("author")
    author.innerText = a;
    const pages = document.createElement("p");
    pages.classList.add("nun-of-pages");
    pages.innerText = p;
    const readBtn = document.createElement("button");
    readBtn.classList.add("cardBtn");
    readBtn.classList.add("readBtn");
    readBtn.innerText = "READ";
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("cardBtn");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerText = "REMOVE";
}

// Array of books
let myLibrary = [];

// Parent Object
function Book(name, author, numOfPages, read) {
    this.name = name;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

// Placeholder Book
let book = new Book("Harry Potter and the Order of Phoenix", "J.K. Rowling", 816, false)

// Prototype function to return book's info
Book.prototype.info = function() {
    return `${this.name} by ${this.author}, ${this.numOfPages} pages, ${(this.read) ? "read" : "not read yet"}.`
}

// Add new Object to Library
function addBookToLibrary(book) { 
    myLibrary.push(book)
}

