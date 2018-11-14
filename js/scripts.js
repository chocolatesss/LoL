const dqs = query => document.querySelector(query);
const dqsa = query => document.querySelectorAll(query);

/*
  function dqsOld(query) {
    return document.querySelector(query);
  }
  function dqsaOld(query) {
    return document.querySelectorAll(query);
  }
 */

// https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches10.json
const getMatchDataForm = dqs('#getMatchDataForm');
// getMatchDataForm.addEventListener('submit', function(event) {
// });
getMatchDataForm.addEventListener('submit', event => {
  event.preventDefault();
  const matchDataOne = `https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches1.json`;
  const requestOptions = {
    method: 'GET',
    mode: 'no-cors'
  };

  fetch(matchDataOne, requestOptions)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(res => {
      console.log(res);
    });
});

/**
 * Checks for the presence of an API Key and, if found, will hide the API Key
 * form and show the Summoner ID form.
 */
function formToggle() {
  //
}
