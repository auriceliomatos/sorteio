
const alunos = [];

function adicionarAluno() {
    const nomeInput = document.getElementById('nome');
    const notaInput = document.getElementById('nota');

    const nome = nomeInput.value;
    const nota = parseFloat(notaInput.value);

    if (nome && !isNaN(nota)) {
        if (nota > 10) {
            alert('Por favor, redigite a nota. Ela não pode ser maior que 10.');
            notaInput.value = '';
            return;
        }
        alunos.push({ nome, nota });
        nomeInput.value = '';
        notaInput.value = '';
        exibirAlunos();
        exibirAlunosAprovados();
        exibirAlunosReprovados();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function exibirAlunos() {
    const alunosDiv = document.getElementById('alunos');
    alunosDiv.innerHTML = ''; // Limpa a lista antes de exibir
    alunos.forEach(aluno => {
        const div = document.createElement('div');
        div.className = 'aluno';
        div.innerText = `${aluno.nome} - Nota: ${aluno.nota}`;
        alunosDiv.appendChild(div);
    });
}

function filtrarAlunosAprovados() {
    return alunos.filter(aluno => aluno.nota >= 6);
}

function exibirAlunosAprovados() {
    const alunosAprovadosDiv = document.getElementById('alunosAprovados');
    alunosAprovadosDiv.innerHTML = ''; // Limpa a lista antes de exibir
    const alunosAprovados = filtrarAlunosAprovados();
    alunosAprovados.forEach(aluno => {
        const div = document.createElement('div');
        div.className = 'aluno';
        div.innerText = `${aluno.nome} - Nota: ${aluno.nota}`;
        alunosAprovadosDiv.appendChild(div);
    });
}

function filtrarAlunosReprovados() {
    return alunos.filter(aluno => aluno.nota < 6);
}

function exibirAlunosReprovados() {
    const alunosReprovadosDiv = document.getElementById('alunosReprovados');
    alunosReprovadosDiv.innerHTML = ''; // Limpa a lista antes de exibir
    const alunosReprovados = filtrarAlunosReprovados();
    alunosReprovados.forEach(aluno => {
        const div = document.createElement('div');
        div.className = 'aluno';
        div.innerText = `${aluno.nome} - Nota: ${aluno.nota}`;
        alunosReprovadosDiv.appendChild(div);
    });
}
