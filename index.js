$(document).ready(function (){
});

function searchRepositories() {
  const searchTerms = document.getElementById("searchTerms").value
  $.get(`https://api.github.com/users/${searchTerms}/repos`, function(response) {
    console.log(response.map( repository => repository.name );
    $("#results").html();
  }).fail( function(error) {
    $("#errors").html("I'm sorry, there's been an error. Please try again.");
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
