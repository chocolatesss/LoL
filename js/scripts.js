// 1. These are two utility functions for you to use. I encourage you to use
// these wherever it makes sense to do so, which is basically everywhere.
const dqs = query => document.querySelector(query);
const dqsa = query => document.querySelectorAll(query);
// I know you find ES6 a little confusing, which is completely understandable,
// so here are the above functions declared in ES5 style.
function dqsOld(query) {
  return document.querySelector(query);
}
function dqsaOld(query) {
  return document.querySelectorAll(query);
}

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

// 2. Using the above `dqs` function, you can make this easier to read.
const summonerIdForm = dqs('#go');
// const form = document.querySelector('#go');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('works');
  console.log(event);
});

// 3. change this to use dqs
//const apiKeyForm = document.querySelector('#apiKeyForm');
const apiKeyForm = dqs('#apiKeyForm');

apiKeyForm.addEventListener('submit', event => {
  event.preventDefault();
  // figure out how to get the api key value
  // 4. This is close. First off, change it to use `dqs`, as it's an ID you'll
  // need to add a # to the start. I would say that it is perfectly fine to use
  // document.getElementById, but if you use the same function(s) throughout your
  // code you'll find it a lot easier to read and understand.
  // 4.1. Change this to be `const` instead of `var`.
  // 4.2 This is just getting the element itself, google for how to get the value
  // of an input in js, it's so simple you may hate me for making you google it.
  const apiKeyValue => document.getElementById('#apiKey').value;
  // 5. The second argument to `setItem` needs to be the variable not in quotations.
  localStorage.setItem('apiKey', apiKeyValue);
  // 6. Once the API key has been saved to local storage, hide that form and
  // display the other one.
});

const apiKey = localStorage.getItem('apiKey');

// 7. This is also pretty close. Here you're hiding the actual inputs, not the
// form. Earlier in the code we have `const form = ...` and `const apiKeyForm = ...`
// so I would suggest renaming `form` to something more descriptive, and then in
// these you can use those two variables. I've given you the first one.
if (apiKey) {
  // hide api key form and show other form.
  apiKeyForm.style.display = 'none';
  summonerIdForm.style.display = 'block';
} else {
  // do the reverse of the above
  apiKeyForm.style.display = 'block';
  summonerIdForm.style.display = 'none';
}
