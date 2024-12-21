let topics = [
    "Table of Contents",
    "Call Stack",
    "Primitive Types",
    "Value Types and Reference Types",
    "Implicit, Explicit, Nominal, Structuring and Duck Typing",
    "== vs === vs typeof",
    "Function Scope, Block Scope and Lexical Scope",
    "Expression vs Statement",
    "IIFE, Modules and Namespaces"
  ];
  
  function slider() {
    let textElements = document.getElementById("qutoes");
      textElements.innerText = topics[Math.floor(Math.random() * topics.length)];
    
  }
  
  setInterval(() => {
    slider();
  }, 1000);
  