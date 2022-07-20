// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
/* to add more and modify data
https://api.github.com/repos/twitter/chill/issues?per_pae=5&sort_by=updated&pages=1' */

var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
     for (var i = 0; i < data.length; i++) {
      console.log(data[i].url);
      console.log(date[i].user.login) 
    }
  });

/* the .url pulls the urls from the website and the .user.login pulls the name and login*/