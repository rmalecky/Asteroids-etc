function sum() {
  var sum = 0;

  for ( var i = 0; i < arguments.length; i++ ) {
    sum += arguments[i];
  }

  return sum;
}

//console.log(sum(1, 2, 3, 4))
//console.log(sum(1, 2, 3, 4, 5))

Function.prototype.myBind = function(obj) {
  var func = this;
  var args = Array.prototype.slice.call(arguments, 1);

  return function(){
    var moreArgs = Array.prototype.slice.call(arguments);
    func.apply(obj, args.concat(moreArgs))
  };

}

// function Cat(name) {
//   this.name = name;
// }
//
// function talk(arg1, arg2) {
//   console.log("My name is " + this.name + " " + arg1 + " " + arg2 )
// }
//
// cat = new Cat("Henry")
//
// var secondTalk = talk.myBind(cat, "This worked");
//
// secondTalk("Still works?");

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(number) {
    numbers.push(number)

    if(numbers.length === numArgs) {
      var sum = 0;

      for ( var i = 0; i < numbers.length; i++ ) {
        sum += numbers[i];
      }

      return sum;
    } else {

      return _curriedSum;
    }
  }

  return _curriedSum;
}

// console.log(curriedSum(4)(5)(30)(20)(1))


Function.prototype.curry = function(numArgs) {
  var args = [];
  var that = this;

  function _curry(arg) {
    args.push(arg)

    if(args.length === numArgs) {
      //first argument irrelevant??
      return that.apply(undefined, args)

    } else {

      return _curry;
    }
  }

  return _curry;
}

function myConcat(){
  result = "";
  for(var i=0; i< arguments.length; i++){
    result = result + " " + arguments[i];
  };
  return result;
};

console.log(myConcat("A", "B", "C"));

console.log(myConcat.curry(3)("D")("E")("F"));


