# Boolean Logic Interpreter

A JavaScript implementation of a Boolean logic interpreter that can evaluate simple expressions.

## Syntax and Operator Precedence

- Variables are case-insensitive alphanumeric strings, and are assigned with the `let` keyword, followed by the name of the variable and an expression that represents the value, separated by an equal sign `=`.
- The negation operator `¬` takes the highest precedence. It negates the expression following it.
- The logical AND operator `∧` takes precedence over the logical OR operator `∨`.
- Parentheses `(` and `)` can be used to specify the order of operations.
- Variables are evaluated to their values assigned using the `let` keyword, or throw an error if the variable has not been defined.
- The literals `T` and `F` represent the values true and false respectively, or throw an error if the expression is not a valid literal.

## Examples

interpret('T ∨ F'); // returns true

interpret('T ∧ F'); // returns false

interpret('(T ∧ F) = F'); // returns true

interpret('let X = F'); // returns false

variables; // returns { X: false }

interpret('let Y = ¬X'); // returns true

interpret('¬X ∧ Y'); // returns true

## Function Definition

function interpret(expression) {
...
}


### Input

A string `expression` representing a Boolean expression consisting of variables, literals, logical operators, and parentheses.

### Output

The result of evaluating the expression as a Boolean value (either `true` or `false`).

### Limitations

- The interpreter does not support multi-letter variables, only single-letter variables are allowed.
- The interpreter only supports the logical operators AND (`∧`), OR (`∨`), and NOT (`¬`) and the equal operator (`=`).
- The interpreter only supports the literals `T` and `F`.

### Error Handling

- If the expression is not a valid Boolean expression, the function throws an error.
- If a variable is used in the expression before it is assigned a value, the function throws an error.
- If the expression is too complex for the interpreter to evaluate, the function throws an error.

## Usage

Include the code in your project, and then call the `interpret` function with a string representation of your Boolean expression.

## Contribute

Feel free to contribute to this project by submitting a pull request.