const saveButton = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
let myLeads = [];

saveButton.addEventListener('click', () => {
  myLeads.push(inputEl.value);
  renderItems();
  inputEl.value = '';
});

function renderItems() {
  let list = document.createElement('li');
  if (!inputEl.value) {
    return;
  }
  for (let i = 0; i < myLeads.length; i++) {
    list.innerHTML = `<a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>`;
  }
  ulEl.appendChild(list);
}
