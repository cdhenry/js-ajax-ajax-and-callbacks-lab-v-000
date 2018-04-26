$(document).ready(function (){
});

function searchRepositories() {
  let repository = document.getElementById("searchTerms").value
  $.get(`https://api.github.com/users/${repository}/repos`, function(response) {

    $("#results").html(reponse);
  }).fail(function(error) {
    $("#errors").html(error);
  });
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
