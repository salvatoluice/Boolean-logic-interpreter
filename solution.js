// Boolean Logic Interpreter

const variables = {};

const isValidVariable = (name) => /^[a-zA-Z]+$/.test(name);

const isTrueLiteral = (value) => value === 'T';
const isFalseLiteral = (value) => value === 'F';
const isBooleanLiteral = (value) => isTrueLiteral(value) || isFalseLiteral(value);

const evaluate = (expression) => {

    // Handle assignment of variables
    if (expression.includes('=')) {
      const [variable, value] = expression.split('=');
      if (!isValidVariable(variable)) {
        throw new Error(`Invalid variable name: ${variable}`);
      }
      variables[variable] = evaluate(value.trim());
      return variables[variable];
    }
  
    // Negating expression
    if (expression.startsWith('¬')) {
      return !evaluate(expression.substring(1));
    }
  
    // Parentheses
    if (expression.startsWith('(') && expression.endsWith(')')) {
      return evaluate(expression.substring(1, expression.length - 1));
    }
  
    // Logical AND expression
    if (expression.includes('∧')) {
      const [left, right] = expression.split('∧');
      return evaluate(left) && evaluate(right);
    }
  
    // Logical OR expression
    if (expression.includes('∨')) {
      const [left, right] = expression.split('∨');
      return evaluate(left) || evaluate(right);
    }
  
    // Variables
    if (isValidVariable(expression)) {
      if (!(expression in variables)) {
        throw new Error(`Variable not defined: ${expression}`);
      }
      return variables[expression];
    }
  
    // Literals
    if (isBooleanLiteral(expression)) {
      return isTrueLiteral(expression);
    }
  
    throw new Error(`Invalid expression: ${expression}`);
};

// The code defines a Boolean logic interpreter in JavaScript. It has functions to check if a given expression is a variable, true literal, false literal, or any literal. The main function, interpret, takes in an expression and returns its evaluated value based on the following steps:

// 1. It checks if the expression is an assignment statement and, if so, updates the value of the variable in the variables object.
// 2. It checks if the expression starts with a negation symbol ¬ and, if so, negates the expression.
// 3. It checks if the expression is surrounded by parentheses and, if so, evaluates the expression inside the parentheses.
// 4. It checks if the expression contains a logical AND (∧) or OR (∨) symbol and, if so, performs the respective logical operation.
// 5. If the expression is a variable, the function returns its value from the variables object. If the expression is a literal (true or false), it returns its value. If the expression does not match any of these conditions, an error is thrown.