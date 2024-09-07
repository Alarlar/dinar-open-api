// Creating my fetch

const gitHubUsername = "Alarlar";

fetch(`https://api.github.com/users/${gitHubUsername}/repos`)
  .then((response) => {
    return response.json(); // Converting response to JSON
  })
  .then((repositories) => {
    console.log(repositories); // List of repositories

    displayRepositories(repositories);
  })
  .catch((error) => {
    console.error("Error fetching GitHub repositories:", error);
    const projectSection = document.querySelector("#projects");
    projectSection.innerHTML =
      "<p>Could not load projects. Please try again later.</p>";
  });

// This function will display repo in list

function displayRepositories(repositories) {
  const projectSection = document.querySelector("#projects");
  const projectList = projectSection.querySelector("ul");

  for (let i = 0; i < repositories.length; i++) {
    const repo = repositories[i];
    const project = document.createElement("li");

    project.innerText = repo.name;
    projectList.appendChild(project);
  }
}
