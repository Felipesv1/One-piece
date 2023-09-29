const btns = document.querySelectorAll(".btn")
const characters = document.querySelectorAll(".character")
console.log(btns)

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        
        
    
        removeSelectionBtn();
        
        characters.forEach((character) => {
            if(btn.id === character.id)
            {
                removeSelectionCharacter()
                character.classList.add('selected')
                btn.classList.add('selected')
            }
        })
})
})

function removeSelectionBtn(){
    const btnSelected = document.querySelector('.selected')
    btnSelected.classList.remove("selected")

}function removeSelectionCharacter(){
    const characterSelected = document.querySelector('.selected')
    characterSelected.classList.remove("selected")
}

