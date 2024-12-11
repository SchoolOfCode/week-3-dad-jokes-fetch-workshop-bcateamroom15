


async function getAndDisplayNewJoke() {
  const { joke } = await retrieveJoke();
  displayJoke(joke);
}

async function retrieveJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    }
  });
  //console.log(response);
  const data = await response.json();
  //console.log(data.joke);
  return data;
  }


//Function to update the DOM with the provided joke
function displayJoke(joke) {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = joke;
}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

//Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

//Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);




