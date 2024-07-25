// controller.js
import { fetchApi, typeColors } from './model.js';
import View from './view.js';

class Controller {
    constructor() {
        this.view = new View();
        this.view.search.addEventListener('change', this.handleSearch.bind(this));
    }

    async handleSearch(event) {
        const pkmnData = await fetchApi(event.target.value);

        if (!pkmnData) {
            this.view.showError('Pokémon does not exist.');
            return;
        }

        const mainColor = typeColors[pkmnData.types[0].type.name];
        this.view.baseStats.style.color = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
        this.view.pokedex.style.backgroundColor = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
        
        this.view.updatePokemonInfo(pkmnData, typeColors);
    }
}

new Controller();

//Nelson Eduardo Hernandez Perez