var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  if (response.status === 404) {
    // location.replace("./404.html") - another way to do it
    location.href = "./404.html"
  }
  return response.json();
});

