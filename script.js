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


class Bird {
    useWings() {
        console.log("Flying!")
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings()
kingPenguin.useWings()