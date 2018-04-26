$(document).ready(function (){
});

function searchRepositories() {
  const searchTerms = document.getElementById("searchTerms").value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(response) {
    console.log(response);
    $("#results").html(response.items.map( result =>
      `
        <div style="width: 600px">
          <div class="flex items-center border rounded">
            <img class="flex-none mr1" src="${result.owner.avatar_url}">
            <div>
              <h2 class="m0"><a href="${result.html_url}">${result.name}</a></h2>
              <p>${result.description}</p>
              <a href="${result.owner.html_url}">${result.owner.login}</a><br>
            </div>
          </div>
        </div>
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
