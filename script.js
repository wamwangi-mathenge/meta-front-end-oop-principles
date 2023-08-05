// Polymorphism

const bicycle = {
    bell: function() {
        return "RIng, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! COme here please!"
    }
}

// console.log(bicycle.bell())
// console.log(door.bell())

function ringTheBell(bicycle) {
    console.log(bicycle.bell())
}

ringTheBell(bicycle);
ringTheBell(door);