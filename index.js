function appetizer() {
    console.log("gyoza");
}

function mainCourse() {
    console.log("sushi");
}

function receivesAFunction(mainCourse) {
    appetizer();
    mainCourse();
    }


console.log(receivesAFunction(mainCourse));

//

function randomFunction() {
    console.log("so random");
}

function returnsANamedFunction() {
    return function randomFunction() {
        console.log("blah");
    };
}

console.log(returnsANamedFunction(randomFunction))

//

// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function

////

//     describe("returnsAnAnonymousFunction()", () => {
//       var fn;
  
//       before(() => {
//         fn = returnsAnAnonymousFunction();
//       });
  
//       it("returns a function", () => {
//         expect(fn).to.be.a("function");
//       });
  
//       it("returns an anonymous function", () => {
//         expect(fn.name).to.eql("");
//       });
//     });
//   });

(function() {
    console.log('blah blah blah');
})();

function returnsAnAnonymousFunction() {
    return function(){
    };
}