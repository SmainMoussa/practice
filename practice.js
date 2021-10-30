// FUNCTIONS

var isFirst = function (number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

var pikatchu = {
    yell: function () {
        console.log("PIKATCHU")
    }
}



var classA = [{
    name: 'Marc',
    average: 15
}, {
    name: 'Marion',
    average: 8

}, {
    name: 'Antoine',
    average: 4

}, {
    name: 'Jean',
    average: 14
}]

var classB = [{
    name: 'Seb',
    average: 8
}, {
    name: 'Marine',
    average: 6

}, {
    name: 'Pedro',
    average: 14

}, {
    name: 'Violette',
    average: 14
}]


var hasAverage = function (students) {
    var average = []
    for (var i = 0; i < students.length; i++) {
        var student = students[i]
        if (student.average >= 10)
            average.push(student);
    }
    return average
}
// console.log(hasAverage(classA))

function whoHasHighestAverage(students) {

    for (var i = 0; i < students.length; i++) {
        var student = eleves[i]
        if (eleve.average >= 10) {
            console.log(student.name + " has the overall average")
        }
    }
}

var occurence = function (sentence) {
    const words = sentence.toLowerCase().split(' ')
    var counter = {}

    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        if (counter[word] === undefined) {
            counter[word] = 1
        } else {
            counter[word]++
        }
    }
    return counter
}

var student1 = {
    name: 'Juan',
    marks: [15, 18, 20]
}
var student2 = {
    name: 'Marc',
    marks: [15, 18, 20]
}

var average = function (marks) {
    var sum = 0
    for (var i = 0; i < marks.length; i++) {
        sum = sum + marks[i]
    }
    return sum / marks.length
}

/*  var isBetter = function(a, b){
     return average(a.marks) >average(b.marks) 
    }
*/
var isBetter = function (student1, student2) {
    if (average(student1.marks) > average(student2.marks)) {
        console.log("student 1 is better")
    } else if (average(student1.marks) === average(student2.marks)) {
        console.log("they are equals")
    } else {
        console.log("student 2 is better")
    }

}

// THIS

var myFunction = function (a) {
    return this
}
var eleve = {
    myFunction: function () {
        return this
    }
}
myFunction() // window
eleve.myFunction() // eleve {}
myFunction.call('Salut', 'argument1') // 'Salut'


// PROTOTYPE

var eleve = {
    moyenne: function () {
        var sum = 0
        for (var i = 0; i < this.marks.length; i++) {
            sum += this.marks[i]
        }
        return sum / this.marks.length
    },
    present: function () {
        console.log(this.name + " is present");
    }
}

var jean = {
    name: 'Jean',
    marks: [10, 20]
}
var marc = {
    name: 'Marc',
    marks: [20, 20]
}
jean.__proto__ = eleve
marc.__proto__ = eleve

/* jean.__proto__ = eleve "l'objet jean implementera les fonctions présentes dans eleve"

Object.getPrototypeOf(jean) > nous donne le prototype de jean 

create new object that has prototype of student */
var marion = Object.create(eleve) // it will have functions that eleve has

var Student = function (name, marks) {
    if (marks != undefined) {
        this.marks = marks
    }
    this.name = name
}

Student.prototype.moyenne = function () {
    if (this.marks == undefined) {
        return NaN
    }
    var sum = 0
    for (var i = 0; i < this.marks.length; i++) {
        sum += this.marks[i]
    }
    return sum / this.marks.length
}

var kev = new Student('Kev', [8, 12])
var sarah = new Student('Sarah')

