$(document).ready(function (){
});

function searchRepositories() {
  const searchTerms = document.getElementById("searchTerms").value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(response) {
    $("#results").html(response.items.map( result =>
      `
        <div style="width: 450px">
          <div class="flex items-center border rounded">
            <img class="flex-none mr1" src="${result.owner.avatar_url}" height="100" width="100">
            <div>
              <h3 class="m0"><a href="${result.html_url}">${result.name}</a></h3>
              <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
              <p>${result.description}</p>
              <a href="${result.owner.html_url}">${result.owner.login}</a><br><br>
            </div>
          </div>
        </div>
        <br>
      `
    ));
  }).fail( function(error) {
    $("#errors").html("I'm sorry, there's been an error. Please try again.");
  });
}

function showCommits(el) {
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, function(response) {
    console.log(response[0].author.avatar_url);
    $('#details').html(response.map( commit =>
      `
        <div style="width: 450px">
          <div class="flex items-center border rounded">
            <img class="flex-none mr1" src="${commit.author.avatar_url}" height="100" width="100">
            <div>
              <h3 class="m0"><a href="${commit.author.html_url}">${commit.author.login}</a></h3>
              <p>${commit.sha}</p>
            </div>
          </div>
        </div>
        <br>
      `
    ));
  }).fail( function(error) {
    $("#errors").html("I'm sorry, there's been an error. Please try again.");
  });
}
