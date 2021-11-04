function randNumber() {
    var randNumber = parseInt(Math.random() * 10)
    counter = 3
    var aTry

    console.log(randNumber)

    for (var i = 0; i < counter; i++) {
        if (i == 0) {
            aTry = prompt("Enter a number")
        } else {
            aTry = prompt("Retry with a new number")
        }

        aTry = parseInt(aTry, 10)
        if (aTry == randNumber) {
            break
        } else if (aTry > randNumber) {
            alert("You are above")
        } else {
            alert("You are under")
        }
    }

    if (aTry == randNumber) {
        alert('Good Job!')
    }
    else {
        alert("You failed!")
    }
}

/*
(function () {

    var i = 0
    var timer = window.setInterval(function () { // setInterval, setTimout
        i++
        console.log(i)
        if (i === 10) {
            window.clearInterval(timer);
            console.log("fini!")
        }
    }, 1000) // asynchrone
})()
*/
(function () {
    for (var i = 0; i < 10; i++) {
        (function (i) {
            window.setTimeout(function () {
                console.log(i)
            }, 1000)
        })(i)
    }
})()