/*
const p = document.querySelector('p')

var red = function () {
    p.classList.toggle('red')
}
 p.addEventListener('click', red)
*/


/*
p.addEventListener('click', () => {
    p.style.color = 'red'
})
p.addEventListener('mouseleave', () => {
    p.style.color = 'black'
})
*/

const ps = document.querySelectorAll('p')

ps.forEach(element => {
    // var red = function () {
    //     element.classList.add('red') //sinon this.classList
    // }
    element.addEventListener('mouseover', () => {
        element.classList.add('red')
    })

    element.addEventListener('mouseout', () => {
        element.classList.remove('red')
    })

})

const lien = document.querySelectorAll('a.external')

lien.forEach(element => {
    element.addEventListener('click', (event) => {
        event.stopPropagation() // arreter la propagation sur l'element parent
        console.log('jai cliqué sur le lien', event)
        console.log(event.target)
        var reponse = window.confirm('voulez vous vraiment quitter le site') // meme si on clique sur non, on nous renvoie quand meme sur le site
        // console.log(event)
        if (reponse === false) { // cancel an event
            event.preventDefault()

        }
    })
})

document.querySelector('p').addEventListener('click', (event) => {
    event.preventDefault()
    console.log('jai cliqué sur le paragraph', event)

    console.log(event.target)
})