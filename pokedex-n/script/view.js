class View {
    constructor() {
        this.search = document.querySelector('#search');
        this.number = document.querySelector('#number');
        this.pokemonImage = document.querySelector('#pokemon-image');
        this.types = document.querySelector('#types');
        this.statNumber = document.querySelectorAll('.stat-number');
        this.barInner = document.querySelectorAll('.bar-inner');
        this.barOuter = document.querySelectorAll('.bar-outer');
        this.statDesc = document.querySelectorAll('.stat-desc');
        this.baseStats = document.querySelector('#base-stats');
        this.pokedex = document.querySelector('#pokedex');
    }

    updatePokemonInfo(pkmnData, mainColor) {
        this.number.innerHTML = '#' + pkmnData.id.toString().padStart(3, '0');
        this.pokemonImage.src = pkmnData.sprites.other.home.front_default;
        this.updateTypes(pkmnData.types, mainColor);
        this.updateStats(pkmnData.stats, mainColor);
    }

    updateTypes(types, mainColor) {
        this.types.innerHTML = '';
        types.forEach((t) => {
            let newType = document.createElement('span');
            let color = mainColor[t.type.name];
            newType.innerHTML = t.type.name;
            newType.classList.add('type');
            newType.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            this.types.appendChild(newType);
        });
    }

    updateStats(stats, mainColor) {
        stats.forEach((s, i) => {
            this.statNumber[i].innerHTML = s.base_stat.toString().padStart(3, '0');
            this.barInner[i].style.width = `${s.base_stat}%`;
            this.barInner[i].style.backgroundColor = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
            this.barOuter[i].style.backgroundColor = `rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]}, 0.3)`;
            this.statDesc[i].style.color = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
            this.statNumber[i].style.color = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`; // Cambiar el color del número de estadística
            
            // Cambiar el color del título de la estadística
            this.statDesc[i].style.color = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`; // Cambiar el color del título
        });
    }

    showError(message) {
        alert(message);
    }
}

export default View;

//Nelson Eduardo Hernandez Perez