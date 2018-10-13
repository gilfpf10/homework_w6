document.addEventListener('DOMContentLoaded',() => {
  console.log('ready to go')


  // listeners
  // #new-item-form poinst to the id in HTML
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', NewItemFormSubmit);


  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener ('click', HandleDeleteAll);
  // #delete-all poits to DeleteAll button in HTML

})

// main function, points to listener(NewItemForm)

const NewItemFormSubmit = function (event){
  event.preventDefault();

//reads input from the browser?
  const readingListItem = createReadingListItem(event.target);

// submits input from the browser
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();

}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  readingListItem.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.author.value;
  readingListItem.appendChild(author);

  const category =document.createElement('p');
  category.textContent = form.category.value;
  readingListItem. appendChild(category);
  return readingListItem;

}
// event handler for delete all

const HandleDeleteAll = function (event){
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';

}
