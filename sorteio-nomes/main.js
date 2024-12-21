const names = [];
    const winners = [];
    const nameInput = document.getElementById('nameInput');
    const addNameBtn = document.getElementById('addNameBtn');
    const drawBtn = document.getElementById('drawBtn');
    const namesList = document.getElementById('namesList');
    const winner = document.getElementById('winner');
    const winnersList = document.getElementById('winnersList');

    addNameBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name && !names.includes(name)) {
            names.push(name);
            nameInput.value = '';
            updateNamesList();
        } else if (names.includes(name)) {
            alert('Este nome já está cadastrado!');
        }
    });

    drawBtn.addEventListener('click', () => {
        if (names.length > 0) {
            let randomIndex;
            let selectedWinner;

            do {
                randomIndex = Math.floor(Math.random() * names.length);
                selectedWinner = names[randomIndex];
            } while (winners.includes(selectedWinner));

            winner.textContent = `Vencedor: ${selectedWinner}`;
            winners.push(selectedWinner);
            updateWinnersList();
        } else {
            winner.textContent = 'Adicione nomes para o sorteio!';
        }
    });

    function updateNamesList() {
        namesList.innerHTML = '<h3>Nomes Cadastrados:</h3><ul>' + names.map(name => `<li>${name}</li>`).join('') + '</ul>';
    }

    function updateWinnersList() {
        winnersList.innerHTML = '<h3>Ganhadores:</h3><ul>' + winners.map(winner => `<li>${winner}</li>`).join('') + '</ul>';
    }