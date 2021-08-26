const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ce8f65444f164d588c7d405328d1118c";

const dataContainer = document.querySelector(".results");
const loadingsymbol = document.querySelector(".loadingsymbol")


async function getData() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        const infoContainer = results.results

        dataContainer.innerHTML = "";

        for (let i = 0; i < infoContainer.length; i++) {

            if (i === 8) {
                break;
            }

            dataContainer.innerHTML += `<div class="gameStyle">Name: ${infoContainer[i].name}. Rating: ${infoContainer[i].rating}. Number of tags: ${infoContainer[i].tags.length}</div>`
        }
    }
    catch (error) {
        dataContainer.innerHTML = `< div > An error has occured</div >`
    }
}

getData()