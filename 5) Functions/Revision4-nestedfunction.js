function retirement(f1, last1, age) {
    function fullN() {
      return f1 + last1;
    }
    function born() {
       let rage = 2025 - age;
  
      return rage;
    }
    return fullN() + born();
  }
  
  console.log(retirement("Ed ", "Lee ", 1900));

  
  