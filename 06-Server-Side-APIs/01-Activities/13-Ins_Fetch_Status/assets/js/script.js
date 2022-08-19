// var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

// var responseText = document.getElementById('response-text');

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       console.log(response);
//       if (response.status === 200) {
//         responseText.textContent = response.status;
//       }
//       return response.json();
//   });
// }

// getApi(requestUrl);


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a535281b61mshce35bc85549ab99p1420dcjsn610a2113d2c1',
		'X-RapidAPI-Host': 'search-celebrity-biography.p.rapidapi.com'
	}
};

fetch('https://search-celebrity-biography.p.rapidapi.com/search/jimmy%20fallon', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));