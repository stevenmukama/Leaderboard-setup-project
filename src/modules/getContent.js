import showContent from './showContent.js';

const showgameData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Bm2YItWJb25agTDUzkYj/scores/';
  await fetch(url).then((response) => response.json())
    .then((data) => showContent(data));
};

export default showgameData;