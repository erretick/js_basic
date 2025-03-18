function crypto(password) {
  const arr = password.split("");
  arr.reverse();
  let firstChar = arr.shift();
  arr.push(firstChar);
  return arr.join("");
}

function check(cryptoPass, realPass) {
  return crypto(cryptoPass) === realPass;
}

console.log(crypto("password"));
console.log(check("rowssapd", "password"));
console.log(check("rowssapd", "word"));
