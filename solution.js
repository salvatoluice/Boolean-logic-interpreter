const isVariable = (expression) => {
    return /^[a-zA-Z]+$/.test(expression);
  };
  
const isTrue = (expression) => {
    return expression === 'T';
  };
  
const isFalse = (expression) => {
    return expression === 'F';
  };
  
const isLiteral = (expression) => {
    return isTrue(expression) || isFalse(expression);
  };

