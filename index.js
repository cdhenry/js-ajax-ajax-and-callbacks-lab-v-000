$(document).ready(function (){
});

function searchRepositories() {
  let repoName = document.getElementById("searchTerms").value
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/users/${repoName}/repos`)
  req.send()
}

function showRepositories() {

}

function displayError() {

}

function showCommits() {

}

document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});
