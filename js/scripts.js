const apiUrl = `https://oc1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/`;
const summonerId = 368280;

const champMasteryApiUrl = `${apiUrl}${summonerId}`;

const requestOptions = {
  method: 'GET'
};

fetch(champMasteryApiUrl, requestOptions)
  .then(response => response.json())
  .then(res => {
    console.log(res);
  });

const button = document.querySelector('#go');

button.addEventListener('click', event => {
  event.preventDefault();
  console.log('works');
});
