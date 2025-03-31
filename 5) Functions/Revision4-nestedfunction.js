function retirement(f1, last1, age) {
    function fullN(f1, last1) {
      return f1 + last1;
    }
    function born(age) {
      //  let rage = 2025 - born(age);
  
      return age;
    }
    return fullN(f1, last1) + born(age);
  }
  
  console.log(retirement("Ed ", "Lee ", 1900));
  