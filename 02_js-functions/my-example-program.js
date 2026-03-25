import readline from "readline";

/*
1 ไร่ (Rai) = 4 งาน (์Ngan) = 400 ตารางวา (Sqaure Wa) = 1,600 square meters
1 งาน (์Ngan) = 100 ตารางวา (Square Wa) = 400 square meters
1 ตารางวา (Square Wa) = 4 ตารางเมตร (Square Meter)
*/

// Covert Area Size
function raiUnit(size) {
  const rai = (size).toFixed(2);
  const ngan = (rai * 4).toFixed(2);
  const squareWa = (ngan * 100).toFixed(2);
  const squareMeter = (squareWa * 4).toFixed(2);
  return `${rai} ไร่ | ${ngan} งาน | ${squareWa} ตารางวา | ${squareMeter} ตารางเมตร`;
}
function nganUnit(size) {
  const ngan = (size).toFixed(2);
  const rai = (ngan / 4).toFixed(2);
  const squareWa = (ngan * 100).toFixed(2);
  const squareMeter = (squareWa * 4).toFixed(2);
  return `${rai} ไร่ | ${ngan} งาน | ${squareWa} ตารางวา | ${squareMeter} ตารางเมตร`;
}
function squareWaUnit(size) {
  const squareWa = (size).toFixed(2);
  const ngan = (squareWa / 100).toFixed(2);
  const rai = (ngan / 4).toFixed(2);
  const squareMeter = (squareWa * 4).toFixed(2);
  return `${rai} ไร่ | ${ngan} งาน | ${squareWa} ตารางวา | ${squareMeter} ตารางเมตร`;
}
function squareMeter(size) {
  const squareMeter = (size).toFixed(2);
  const squareWa = (squareMeter / 4).toFixed(2);
  const ngan = (squareWa / 100).toFixed(2);
  const rai = (ngan / 4).toFixed(2);
  return `${rai} ไร่ | ${ngan} งาน | ${squareWa} ตารางวา | ${squareMeter} ตารางเมตร`;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Input
rl.question(`=== Land Unit Converter ===

Choose unit:
[R] ไร่
[N] งาน
[W] ตารางวา
[M] ตารางเมตร

Your choice: `, function (unitInput) {
  const unit = unitInput.trim().toUpperCase();
  rl.question("Area size: ", function (sizeInput) {
    const size = parseFloat(sizeInput);
    let result;
    // if statement
    if (unit === "R") {
      result = raiUnit(size);
      console.log(`${size} ไร่  ==>  ${result}`);
    } else if (unit === "N") {
      result = nganUnit(size);
      console.log(`${size} งาน  ==>  ${result}`);
      //
    } else if (unit === "W") {
      result = squareWaUnit(size);
      console.log(`${size} ตารางวา  ==>  ${result}`);
      //
    } else if (unit === "M") {
      result = squareMeter(size);
      console.log(`${size} ตารางเมตร  ==>  ${result}`);
      //
    } else {
      console.log(`ขนาดพื้นที่ไม่ถูกต้อง! โปรดระบุเป็นตัวเลข`);
    }
    rl.close();
  });
});