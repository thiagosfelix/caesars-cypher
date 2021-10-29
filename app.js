function rot13(str) {
  str = str.toUpperCase();
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    let char = alphabet.indexOf(str[i]);
    if(char == -1) {
      newStr += str[i];
    } else if(alphabet.indexOf(str[i]) <= 12) {
      newStr += alphabet[char + 13];
    } else if(alphabet.indexOf(str[i]) > 12) {
      newStr += alphabet[char - 13];
    }
  }
  console.log(newStr)
  return newStr;
}

rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')