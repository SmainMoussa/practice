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




/*
ON SEPARE notre phrase GRACE AUX ESPACES (split)
ON CREE un compteur {'le' : 1, 'premier': 2}
POUR CHAQUE mots
    VERIFIER si le mot est dans le compteur (compteur[mot])
        je l'incrémente
    SINON
        je lui assigne la valeur
AFFICHE compteur
*/