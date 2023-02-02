// Boolean Logic Interpreter

const variables = {};

const isValidVariable = (name) => /^[a-zA-Z]+$/.test(name);

const isTrueLiteral = (value) => value === 'T';
const isFalseLiteral = (value) => value === 'F';
const isBooleanLiteral = (value) => isTrueLiteral(value) || isFalseLiteral(value);


