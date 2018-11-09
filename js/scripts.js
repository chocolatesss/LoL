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
  var apiKeyValue = document.getElementById("apiKey");
  localStorage.setItem('apiKey', 'apiKeyValue');
});

const apiKey = localStorage.getItem('apiKey');

if (apiKey) {
  // hide api key form
  document.getElementById("apiKey").style.display="none";
  // show summoner id form
  document.getElementById("summonerId").style.display="block";
} else {
  // do the reverse of the above
  document.getElementById("apiKey").style.display="block";
  document.getElementById("summonerId").style.display="none";
  
}
