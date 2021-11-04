/*
change class css
document.querySelector('.paragraph').className = "paragraph ..."
document.querySelectorAll('p')
document.getElementById('demo')
document.getElementsByClassName('paragraph')

var p = document.querySelector('.paragraph')
p.classList.add('blue')
p.classList.remove('blue')
p.classList.contains('blue') false

p.style.fontSize = '20px'

p.innerHTML = "<p> Salut les gens </p>"
p.innerText = "<p> Salut les gas </p>"   garde les tags en texte

p.textContext
*/

/* MODIFIER LE TEXTE
var demo = document.getElementById('demo')

if (demo.textContent) {
    demo.textContent = ".textContent"
} else {
    demo.innerText = ".innerText"
}
*/


// var p = document.querySelector('.paragraph')
// window.setInterval(function () {
//     p.classList.toggle('blue')
// }, 1000)

var ps = document.querySelectorAll('p') // clignotent alternativement
ps.forEach(element => {
    (function (element) {
        window.setInterval(function () {
            element.classList.toggle('blue')
        }, 1000)
    })(element)
});


/*
                                list of ul{li, li, li}
ul.children = [li, li, li]
ul.childElementCount = 3
ul.firstChild = #text //recupere le texte de avant l'element
ul.firstElementChild = <li>...</li>

ul.getElementById('li') = [li, li, li]
ul.querySelector('li:nth-child(3)')

var li = ul.querySelector('li:nth-child(3)')
li.previousElementSibling  // element identique precedent
li.nextElementSibling
li.parentElement

li.parentElement.children //tous les elements au meme niveau
*/


/*                            CHANGE COLOR OF EVERY LI
var li = document.querySelectorAll('li')
li.forEach(element => {
    element.style.color = 'green'
    // element.classList.add('tous')
})
*/

/*
                        deplacer le premier li dans le Body 
document.body.appendChild(li)
*/
var li = document.querySelector('li')
// li.parentElement.appendChild(li)  // replace le premier li en dernier element du parent

// pour cloner un element
var li2 = li.cloneNode(true) // true copie les enfants

li.parentElement.appendChild(li2)

// var li3 = document.createElement('li') //nom du tag
// li3.textContent = "7"
// li.parentElement.appendChild(li3)

// //remplacer un element par un autre
// li.parentElement.replaceChild(li3, li)

// inserer un element avec le premier
var last = document.querySelector('ul').lastElementChild
li.parentElement.insertBefore(last, li)