Function.prototype.inherits = function(SuperClass) {
  function Surrogate() { };
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
}


function MovingObject() {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

MovingObject.prototype.talk = function() {
  console.log("I'm a moving object")
}

Ship.prototype.talkShip = function() {
  console.log("I'm a ship!")
}

ship1 = new Ship()
ship1.talk()
ship1.talkShip()

ast1 = new Asteroid()
ast1.talk()
//ast1.talkShip()
console.log(MovingObject.isPrototypeOf(Asteroid))