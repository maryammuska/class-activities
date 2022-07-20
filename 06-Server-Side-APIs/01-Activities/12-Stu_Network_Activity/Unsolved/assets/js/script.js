requestUrl = 'https://api.github.com/orgs/nodejs/repos';

 var responseText = document.getElementById('resoibse-text');

function getApi(requestUrl) {
fetch(requestUrl)
  .then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseText.textContent = response.status;
    }
    return response.json();
  });
}

getApi(requestUrl);