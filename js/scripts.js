const apiUrl = `https://oc1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/`;
const summonerId = 368280;

const champMasteryApiUrl = `${apiUrl}${summonerId}`;

const requestOptions = {
  method: 'GET'
};

// fetch(champMasteryApiUrl, requestOptions)
//   .then(response => response.json())
//   .then(res => {
//     console.log(res);
//   });

const form = document.querySelector('#go');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('works');
  console.log(event);
});

const apiKeyForm = document.querySelector('#apiKeyForm');

apiKeyForm.addEventListener('submit', event => {
  event.preventDefault();
  // figure out how to get the api key value
  localStorage.setItem('apiKey', 'value goes here');
});

const apiKey = localStorage.getItem('apiKey');

if (apiKey) {
  // hide api key form
  // show summoner id form
} else {
  // do the reverse of the above
}
