document.addEventListener('DOMContentLoaded',() => {
  console.log('ready to go')


  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', NewItemFormSubmit);


  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener ('click', HandleDeleteAll);

})


const NewItemFormSubmit = function (event){
  event.preventDefault();

  const readingListItem = createReadingListItem(event.target);

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();

}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');

  const first_name = document.createElement('h4');
  first_name.textContent = form.first_name.value;
  readingListItem.appendChild(first_name);

  const last_name = document.createElement('h4');
  last_name.textContent = form.last_name.value;
  readingListItem.appendChild(last_name);

  const sport =document.createElement('h4');
  sport.textContent = form.sport.value;
  readingListItem. appendChild(sport);

  const gender = document.createElement('h4');
  gender.textContext = form.gender.value;
  readingListItem.appendChild(gender);

  return readingListItem;

}
// event handler for delete all

const HandleDeleteAll = function (event){
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';

}
