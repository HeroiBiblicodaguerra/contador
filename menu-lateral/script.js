//usando o addEventListener

let menuOpener = document.querySelector('#menu-opener')

menuOpener.addEventListener('click', () => {

    let menuarea = document.getElementById("menuarea")

    if(menuarea.style.width == '200px'){
        menuarea.style.width = '0px'
    }else {
        menuarea.style.width = '200px'
    }



})

function clickAbre(){
   
}
