1 - Generate from the following object a constructor function

```javascript
var person = {
    _name: "Juan",

    getName: function() {
        return this._name;
    },

    getSteps: function() {

        return this.walk.steps;
    },

    walk: (function () {

        function walk() {

            walk.steps++;
        }

        walk.steps = 0;

        return walk;
    })();
};



function Person (_name) {
    // Opcion privada 1
    // Privado por convensión pero se puede modificar desde afuera
    // this._name = _name;

    // Opcion privada 2
    // getName es privilegiado, accese a la var privada _name
    // esto deberia estar en el prototype para que no haya una function por cada instancia
    // Esto nos sirve para ocultar información sensible
    this.getName = function () {
        return _name;
    };


    // Opción 1 metodo privilegiado
    var _steps = 0;
    this.getSteps = function () {
        return _steps;
    }; 

    this.walk = function () {
        _steps++;
    }

}

// Todo esto mismo pero con prototype, es más performante pero son publicas las vars _name y _steps.



``
2 - Implement a function `construct` with the following signature:
`construct(Constructor: Function, args: Array): Object`
It must reproduce exactly the behaviour of the operator `new`. 

**Example**

```javascript
function Person(name) {

    this._name = name;
}

Person.prototype.sayHello = function() {

    console.log("Hi, I'm " + this._name);
}

var person1 = new Person("juan");
var person2 = construct(Person, [ "pepe" ]);

console.log(person1 instanceof Person); // true
console.log(person1._name); // "juan"
console.log(person2 instanceof Person); // true
console.log(person2._name); // "pepe"
```



// operador new
function construct(Constructor, args) {
    var instance = Object.create(Constructor.prototype);

    var result = Constructor.apply(instance, args);

    return result !== null && typeof result === "object" ? result : instance; 
}


