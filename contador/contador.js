const input = document.querySelector('#value')

function maisUm(){
    let valorAtual = Number(input.innerText)

    valorAtual += 1;

    input.innerText = valorAtual
}

function menosUm(){
    let valorAtual = Number(input.innerText);
    valorAtual -= 1;
    input.innerText = valorAtual
}