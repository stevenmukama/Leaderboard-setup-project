import './style.css';
import addNew from './modules/postContent.js';
import showgameData from './modules/getContent.js';

const addBtn = document.querySelector('.submitbutton');
const emptyContainer = document.querySelector('.emptycontent');
const addName = document.querySelector('.addname');
const addScore = document.querySelector('.addscore');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!addName.value || !addScore.value) {
    emptyContainer.innerHTML = '<p class="alert">Please add name and score</p>';
  } else {
    addNew();
    addName.value = [];
    addScore.value = [];
  }
});

// Show data
const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  showgameData();
});