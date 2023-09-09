var backspaceCompare = function (s, t) {
    let first = s.split("");
    let second = t.split("");
    
    for (let i = 0; i < first.length; i++) {
      if (first[i] == "#") {
        if (i === 0) {
          first.splice(i, 1);
          i--;
        } else {
          first.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  
    for (let i = 0; i < second.length; i++) {
      if (second[i] == "#") {
        if (i === 0) {
          second.splice(i, 1);
          i--;
        } else {
          second.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  
    return first.join("") === second.join("");
  };
  
  console.log(backspaceCompare("ab##", "c#d#")); // true
  