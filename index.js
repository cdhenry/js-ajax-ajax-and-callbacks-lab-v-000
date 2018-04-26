$(document).ready(function (){
});

function searchRepositories() {
  const searchTerms = document.getElementById("searchTerms").value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(response) {
    console.log(response);
    $("#results").html(response.items.map( result =>
      `
        <a href="${result.html_url}">${result.name}</a><br>
        ${result.description}<br>
        <a href="${result.owner.html_url}">${result.owner.login}</a><br>
        <img src="${result.owner.avatar_url}" height="100" width="100"><br>
      `
    ));
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
