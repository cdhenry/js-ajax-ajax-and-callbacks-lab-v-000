$(document).ready(function (){
});

function searchRepositories() {
  let repoName = document.getElementById("searchTerms").value
  $.get(`https://api.github.com/users/${repoName}/repos`), function(response) {
    debugger;
    $("#results").html(reponse)
  }
}

// function showRepositories(event, data) {
//   const repos = JSON.parse(this.responseText)
//   const src = document.getElementById("repository-template").innerHTML
//   const template = Handlebars.compile(src)
//   const repoList = template(repos)
//   document.getElementById("repositories").innerHTML = repoList
// }

function displayError() {

}

function showCommits() {

}
