function trocar(){
    let habilitar = document.querySelector('select').value
    
    if 
        (habilitar == 'desabilitado'){
        let habilitar = document.querySelector('.texto')
            document.querySelector(".texto").innerHTML = "DESABILITADO"
            habilitar.style.color = "white"
            habilitar.style.background = "red";
} else{
    document.querySelector('input').disabled = false
    let habilitar = document.querySelector('.texto')
    habilitar.innerHTML = ""
    habilitar.style.color = "black"
    habilitar.style.backgroundColor = "transparent"
    }
}
