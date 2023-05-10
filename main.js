const saveInputButton = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteItems = document.getElementById('del-btn');
const saveTab = document.getElementById('save_tab-btn');
let myLeads = [];
let localStorageFile = JSON.parse(localStorage.getItem('myLeads'));

if (localStorageFile) {
  myLeads = localStorageFile;
  renderItems(myLeads);
}

saveTab.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    renderItems(myLeads);
  });
});

function renderItems(leads) {
  // Declare a variable to store the list items in
  let listItem = '';
  for (let i = 0; i < leads.length; i++) {
    listItem += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItem;
}

deleteItems.addEventListener('click', () => {
  localStorage.clear();
  myLeads.length = 0;
  ulEl.innerHTML = '';
});

saveInputButton.addEventListener('click', () => {
  //Check if input field is not empty
  if (!inputEl.value) {
    return;
  }
  myLeads.push(inputEl.value);
  inputEl.value = '';
  // Save data to local storage
  // convert myLeads array to string
  // as local storage can only store values as strings
  localStorage.setItem('myLeads', JSON.stringify(myLeads));

  renderItems(myLeads);
});
