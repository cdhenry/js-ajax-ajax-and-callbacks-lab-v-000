$(document).ready(function (){
});

function searchRepositories() {
  let repoName = document.getElementById("searchTerms").value
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/users/${repoName}/repos`)
  req.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}

function displayError() {

}

function showCommits() {

}

document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});
