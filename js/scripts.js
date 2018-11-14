const dqs = query => document.querySelector(query);
const dqsa = query => document.querySelectorAll(query);

/**
 * function dqsOld(query) 
 * {
 * return document.querySelector(query);
 * }

   function dqsaOld(query) 
   {
     return document.querySelectorAll(query);
   }
 */

const apiUrl = `https://oc1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/`;

const summonerIdForm = dqs('#summonerIdForm');
const apiKeyForm = dqs('#apiKeyForm');
const apiKey = localStorage.getItem('apiKey');
const summonerID = 368280;
// https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches1.json
// https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches10.json

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

  const summonerId = dqs('#summonerId').value;
  const champMasteryApiUrl = `${apiUrl}${summonerId}`;
  const apiKey = localStorage.getItem('apiKey');

  const requestOptions = {
    method: 'GET',
    headers: { 'X-Riot-Token': apiKey }
  };
  fetch(champMasteryApiUrl, requestOptions)
    .then(response => response.json())
    .then(res => {
      console.log(res);
    });
});

apiKeyForm.addEventListener('submit', event => {
  event.preventDefault();
  const apiKeyValue = dqs('#apiKey').value;
  localStorage.setItem('apiKey', apiKeyValue);
  formToggle();
});

/**
 * Checks for the presence of an API Key and, if found, will hide the API Key
 * form and show the Summoner ID form.
 */
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
