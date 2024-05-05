function hoverButtons(){
  "Function that changes color of all the buttons when hovered over"
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++){
    let originalColor = buttons[i].style.color;
    buttons[i].addEventListener("mouseover", () => {
      buttons[i].style.backgroundColor = "rgb(201,201,201)";
    });
    buttons[i].addEventListener("mouseout", () => {
      buttons[i].style.backgroundColor = originalColor;
    });
  }
}

function login(){
  const login = document.querySelector(".login");
  login.addEventListener("click", () => {
    login.textContent = "Signed in! (not really, just test)";
  })
}

function openModal(){
  const add_book = document.querySelector(".add-book");
  const dialog = document.querySelector("dialog");
  add_book.addEventListener("click", () => {
    dialog.showModal();
  });
}

function submit(){
  const submit = document.querySelector(".submit");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (validate()){
      addBook();
    }
  });
}

function cancel(){
  const cancel = document.querySelector(".cancel");
  cancel.addEventListener("click", (event) => {
    event.preventDefault();
    const dialog = document.querySelector("dialog");
    dialog.close();
  });
}

function addBook(){
  /*
  Function to add book object to myLibrary
  Precondition is that the input is valid
  */
  const titleInput = document.querySelector("#book_title");
  const authorInput = document.querySelector("#author");
  const pageInput = document.querySelector("#pages");
  const readInput = document.querySelector("#checkbox");
  // console.log(titleInput.value, authorInput.value, pageInput.value, readInput.value);
  myLibrary.push(new book(titleInput.value, authorInput.value, pageInput.value, readInput.checked));
  // console.log('book added successfully');
}

function removeBook(){
  const removeBook = docment.querySelectorAll("#removeBtn");

  myLibrary.pop();
}

function validate(){
  "Helper function to validate book adding input"
  const titleInput = document.querySelector("#book_title");
  const authorInput = document.querySelector("#author");
  const pageInput = document.querySelector("#pages");
  const readInput = document.querySelector("#checkbox");

  console.log(titleInput.value, authorInput.value, pageInput.value, readInput.checked);

  var flag = true;
  if (titleInput.value.length <= 0){
    flag = false;
    titleInput.placeholder = "enter valid title!";
  }

  if (authorInput.value.length <= 0) {
    flag = false;
    authorInput.placeholder = "enter valid author!";
  }

  if (pageInput.value <= 0){
    flag = false;
    pageInput.placeholder = "enter valid page number!";
  }
  return flag;
}

function showMyLibrary(){
  "Function to add book 'cards' to DOM"
  // console.log('here');
  resetLibrary();
  const library = document.querySelector(".library");
  for (let i = 0; i < myLibrary.length; i++){
    const book = document.createElement("div");
    // console.log(myLibrary[i].read);
    book.classList.add("book");

    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("div");
    // const removeBtn = document.createElement("button");

    title.textContent = `Book Title: ${myLibrary[i].title}`;
    author.textContent = `Book author ${myLibrary[i].author}`;
    pages.textContent = `${myLibrary[i].numPages} pages`;
    read.textContent = `${myLibrary[i].read ? 'read' : 'not read'}`;
    // removeBtn.textContent = `remove book`;
    // removeBtn.style.backgroundColor = 'rgb(255, 123, 123)';
    // removeBtn.id = "removeBtn";

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(removeBtn);

    library.appendChild(book);
  }
  setTimeout(showMyLibrary, 10);
}

function resetLibrary(){
  const library = document.querySelector(".library");
  library.innerHTML = ''
}

var myLibrary = [];

hoverButtons();
login();
openModal();
submit();
cancel();
showMyLibrary();

class book{
  constructor(title, author, numPages, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }
}