$(document).ready(function (){
});

function searchRepositories() {
  let term = document.getElementById("searchTerms").value
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/users/${term}/repos`)
  req.send()
}

function showRepositories() {

}

function displayError() {

}

function showCommits() {

}
