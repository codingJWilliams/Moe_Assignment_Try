var upperCase = s => s.toUpperCase();



function eliminateBadChars(s) {
  var charset = [];
  for (var i = 65; i < 91; i++) { charset.push(String.fromCharCode(i)) };
  charset.push(" ");
  // Charset is now an array of allowed characters
  var out = new Array()
  for (var i = 0; i < s.length; i++) {
    if ( charset.includes(s[i]) ) {
      out.push(s[i])
    }
  }
  return out.join("");
}



function spacesToStars(s) {
  return s.replace(/[ ]/g, "*"); // Replaces all space characters with * characters
}



function toBase3String(s) {
  var charset = [];
  for (var i = 65; i < 91; i++) { charset.push(String.fromCharCode(i)) };
  charset.push("*");

  var out = new Array();
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    out.push( charset.indexOf(char).toString(3) ) // Adds to the out array, the index of the character in the charset variable, in base 3
  }
  console.log(out.join("").length)
  return out.join("");
}



function splitInto3(s) {
  if ((s.length % 3) !== 0) {
    throw Error("String is not divisible by 3");
  }
  console.log(s.length)
  var start = 0;
  var third = s.length / 3;
  var twothirds = 2 * third;
  var ends = s.length;
  var o = [  s.substring(start, third), 
            s.substring(third, twothirds),
            s.substring(twothirds, ends)
         ];
  return(o)
}



function buildNewNumberset( splitInto3output ) {
  var partA = splitInto3output[0];
  var partB = splitInto3output[1];
  var partC = splitInto3output[2];

  var out = "";

  for (var i = 0; i < partA.length; i++) {
    out += partA[i] + partB[i] + partC[i];
  }

  return out
}



function backToCharacters(s) {
  var charset = [];
  for (var i = 65; i < 91; i++) { charset.push(String.fromCharCode(i)) };
  charset.push("*");
  var out = "";

  for (var i = 0; i < s.length; i++) {
    if ((i % 3) === 0) {
      var base3num = s[i] + s[i + 1] + s[i + 2];
      out += charset[ parseInt(base3num, 3) ];
    }
  }
  return out;
}

function encode(s) {
  var output = s;
  output = upperCase(output);
  output = eliminateBadChars(output);
  output = spacesToStars(output);
  output = toBase3String(output);
  output = splitInto3(output);
  output = buildNewNumberset(output);
  output = backToCharacters(output);
  return output
  
}
console.log(encode("I am the captain"))