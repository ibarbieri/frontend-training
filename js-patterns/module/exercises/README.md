1 - Transform the following singleton (calculator) to a proper (stateless or stateful) module representation (it has to receive the export destination)

```javascript
var calculator = {
    _result: 0,

    add: function(value) {
        this._result += value;
    },

    substract: function(value) {
        this._result -= value;
    },

    multiply: function(value) {
        this._result *= value;
    },

    divide: function(value) {
        this._result /= value;
    }

    getResult: function() {
        return this._result;
    }
};
```

2 - Apply all the changes required to convert the module that you created in the previous exercise to its opposite (if it was stateless, then create its stateful version, and if it was stateful, then create its stateless version)

(function (module, exports, Module2, Module5) {
    var _result = 0,
        value = exports.value;

    function add (value) {
        _result += value;
    }

    function substract (value) {
        _result -= value;
    }

    function multiply (value) {
        _result *= value;
    }

    function divide (value) {
        _result /= value;
    }

    function getResult () {
        return _result;
    }

    module.exports = {
        apiAdd: add,
        apiSubstract: substract,
        apiMultiply: multiply,
        apiDivide: divide,
        apiGetResult: getResult
    };
}).apply(
    undefined,
    (
        (
            (typeof module === "object" && module !== null)
            && (typeof module.exports === "object" && module.exports !== null)
        )
        ? [ module, module.exports ]
        : [ { exports: (App.Module1 = {}) }, App.Module1 ]
    )
    // dependencies
    .concat(App.Module2, App.Module5)
);