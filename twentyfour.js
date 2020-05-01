var bob = new Object()
bob.age = 10;
bob.city="Newyork"
bob.setAge = function(newAge){
    this.age = newAge
}

var tony = new Object()
tony.age = 10;
tony.city="Newyork"
tony.setAge = function(newAge){
    this.age = newAge
}

let createAge = function(newAge){
    this.age = newAge
}

var bob = new Object()
bob.age = 10;
bob.city="Newyork"
bob.setAge = createAge

var tony = new Object()
tony.age = 10;
tony.city="Newyork"
tony.setAge = createAge