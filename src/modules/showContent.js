const showContent = (arr) => {
  const { result } = arr;
  const gameItems = document.querySelector('.itemslist');
  if (!result.length) {
    gameItems.innerHTML = '<div class="emptycontent">Nothing to show</div>';
  } else {
    result.forEach((item) => {
      gameItems.innerHTML += `<p class="data">${item.user}: ${item.score}</p>`;
    });
  }
};

export default showContent;