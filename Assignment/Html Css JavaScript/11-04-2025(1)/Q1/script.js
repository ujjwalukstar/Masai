// Footer clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[now.getDay()];
    const date = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${day} ${date}`;
}
setInterval(updateClock, 1000);
updateClock();

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.textContent = document.body.classList.contains('dark') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });
}

// Main page logic
if (document.getElementById('characterGrid')) {
    let currentPage = 1;
    const charactersPerPage = 6;

    async function fetchCharacters(page) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const data = await response.json();
            displayCharacters(data.results.slice(0, charactersPerPage));
            updatePagination(data.info);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    }

    function displayCharacters(characters) {
        const grid = document.getElementById('characterGrid');
        grid.innerHTML = '';
        characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'col';
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">
                            Species: ${character.species}<br>
                            Status: ${character.status}
                        </p>
                        <a href="character.html?id=${character.id}" target="_blank" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function updatePagination(info) {
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        prevButton.disabled = !info.prev;
        nextButton.disabled = !info.next;
    }

    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchCharacters(currentPage);
        }
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        currentPage++;
        fetchCharacters(currentPage);
    });

    // Random character button
    document.getElementById('randomCharacter').addEventListener('click', async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            const totalCharacters = data.info.count; // 826 characters
            const randomId = Math.floor(Math.random() * totalCharacters) + 1;
            window.open(`character.html?id=${randomId}`, '_blank');
        } catch (error) {
            console.error('Error fetching random character:', error);
        }
    });

    // Initial load
    fetchCharacters(currentPage);
}

// Character detail page logic
if (document.getElementById('characterDetails')) {
    async function fetchCharacter(id) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const character = await response.json();
            displayCharacter(character);
        } catch (error) {
            console.error('Error fetching character:', error);
        }
    }

    async function displayCharacter(character) {
        const details = document.getElementById('characterDetails');
        details.innerHTML = `
            <img src="${character.image}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">
                    Status: ${character.status}<br>
                    Species: ${character.species}<br>
                    Type: ${character.type || 'N/A'}<br>
                    Gender: ${character.gender}<br>
                    Origin: ${character.origin.name}<br>
                    Location: ${character.location.name}<br>
                    Episode Appearances: ${character.episode.length}
                </p>
            </div>
        `;
    }

    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');
    if (characterId) {
        fetchCharacter(characterId);
    } else {
        document.getElementById('characterDetails').innerHTML = '<p>No character ID provided.</p>';
    }
}