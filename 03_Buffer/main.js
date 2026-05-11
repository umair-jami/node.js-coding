const Buff1 = Buffer.from("Hello World");
console.log(Buff1);

// utf-8 = default encoding for English characters
// 1 byte = 8 bits
// 1 character = 1 byte (for English characters)
// 1 character = 2 bytes (for non-English characters)

const char = "h";
const decimalCode = char.codePointAt(0);
console.log(decimalCode);

const hexaDecimal = Buffer.from(char)
console.log(hexaDecimal)

const binary = decimalCode.toString(2);
console.log(binary);
