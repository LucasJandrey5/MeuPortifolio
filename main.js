(function(){
  const my_url = "https://api.github.com/users/lucasjandrey5";
  const client_id = "9c442553e58fd68a5dc0"; 
  const client_secret = "2d144b46b2f1db55b6d1d7cc3e8abe78091f70d1";

  async function getRepos(){
    console.log("aaa");

    const reposResponse = await fetch(
      `${my_url}/repos?per_page=6&sort=created:%20asc&client_id=${client_id}&
      client_secret=${client_secret}`
    );
    const repos = await reposResponse.json();

    showRepos(repos);
  }


  function showRepos(repos){
    let output = ``;

    
    repos.forEach(repo => {
      output += `
        <div class="projects-box">
        <div style="display: flex; align-items: center; margin-left: 15px; ">
          <img src="./assets/folder.svg" class="icon"/>
          <a href="${repo.html_url}"><p class="text-smallbold">${repo.name}</p></a>
        </div>
        <p class="text-regular">${repo.description}</p>
        <div style="display: flex; align-items: center; ">
          <div style="display: flex; align-items: center; margin-left: 15px; ">
            <img src="./assets/star.svg" class="icon"/>
            <p class="text-regular">${repo.stargazers_count}</p>
          </div>
          <div style="display: flex; align-items: center; margin-left: 15px; ">
            <img src="./assets/git-branch.svg" class="icon"/>
            <p class="text-regular">${repo.forks_count}</p>
          </div>
        </div>
      </div>
      `
    });

    document.getElementById("repos").innerHTML = output;
  }


  document.addEventListener('DOMContentLoaded', function(){
    getRepos();
  }, false);

 
})();
