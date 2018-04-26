$(document).ready(function (){
});

function searchRepositories() {
  let name = document.getElementById("searchTerms").value
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/users/${name}/repos`)
  req.send()
}

function showRepositories() {

}

function displayError() {

}

function showCommits() {

}
