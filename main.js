const saveButton = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
let myLeads = [];

saveButton.addEventListener('click', function () {
  //Check if input field is not empty
  if (!inputEl.value) {
    return;
  }
  myLeads.push(inputEl.value);
  inputEl.value = '';
  renderItems();

  // Save data to local storage
  // convert myLeads array to string as local storage can only store values as strings
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
});

function renderItems() {
  // Declare a variable to store the list items in
  let listItem = '';
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItem;
}

let localStorageFile = JSON.parse(localStorage.getItem('myLeads'));
if (localStorageFile) {
  myLeads = localStorageFile;
  renderItems();
}
