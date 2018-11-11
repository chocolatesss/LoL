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

const summonerIdForm = dqs('#go');
const apiKey = localStorage.getItem('apiKey');
const summonerId = dqs('#go').value;
// 3. Time to start working on this, I think we can break this down into a few steps
//    - get the apiKey from local storage
//    - get the summonerId from the input
//    - create the URL to make the request to as above.
//    - make a request to the api with this data.
// You can move the `fetch` and `requestOptions` from above into this. Do you remember
// how to add the API key as a header?
// Also, fair warning here, you have `const apiKey` below, so it may cause a problem
// having that twice, but maybe not as well. See if you can get it working just to a point
// that you can see the response data being put into the console.
summonerIdForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('works');
  console.log(event);
});

const apiKeyForm = dqs('#apiKeyForm');

apiKeyForm.addEventListener('submit', event => {
  event.preventDefault();
  const apiKeyValue = dqs('#apiKey').value;
  localStorage.setItem('apiKey', apiKeyValue);
  // 1. Once the API key has been saved to local storage, hide that form and
  // display the other one.
});

const apiKey = localStorage.getItem('apiKey');

// 2. based on #1 above, we can see there's a need to have this functionality
// available in more than one area, which means it's probably a good candidate
// for putting that into an actual function. I've done this below, you can call
// this function wherever just as `formToggle()`.
function formToggle() {
  if (apiKey) {
    // hide api key form and show other form.
    apiKeyForm.style.display = 'none';
    summonerIdForm.style.display = 'block';
  } else {
    // do the reverse of the above
    apiKeyForm.style.display = 'block';
    summonerIdForm.style.display = 'none';
  }
}
