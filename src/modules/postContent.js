const addNew = async () => {
  const addName = document.querySelector('.addname');
  const addScore = document.querySelector('.addscore');
  const emptyContainer = document.querySelector('.emptycontent');
  const alert = document.querySelector('.secondalert');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Bm2YItWJb25agTDUzkYj/scores/';

  const gameData = {
    user: addName.value,
    score: addScore.value,
  };

  const postContent = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameData),
  };
  await fetch(url, postContent).then((response) => response.json())
    .then((data) => {
      emptyContainer.innerHTML = `<p class="alert">${data.result}</p>`;
      alert.innerHTML = '<p class="alert-2">Click on refresh button to see the added data</p>';
      setTimeout(() => {
        alert.innerHTML = '';
        emptyContainer.innerHTML = '';
      }, 2000);
    });
};

export default addNew;