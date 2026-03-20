import readline from "readline";

/*
1 ไร่ (Rai) = 4 งาน (์Ngan) = 400 ตารางวา (Sqaure Wa) = 1,600 square meters
1 งาน (์Ngan) = 100 ตารางวา (Square Wa) = 400 square meters
1 ตารางวา (Square Wa) = 4 ตารางเมตร (Square Meter)
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Covert Area Size
function raiUnit(size) {
  return `${size} ไร่ | ${size * 4} งาน | ${(size * 4) * 100} ตารางวา | ${((size * 4) * 100) * 4} ตารางเมตร`;
}
function nganUnit(size) {
  return `${size / 4} ไร่ | ${size} งาน | ${size * 100} ตารางวา | ${(size * 100) * 4} ตารางเมตร`;
}
function squareWaUnit(size) {
  return `${(size / 4) / 100} ไร่ | ${size / 100} งาน | ${size} ตารางวา | ${size * 4} ตารางเมตร`;
}
function squareMeter(size) {
  return `${((size / 4) / 100) / 4} ไร่ | ${(size / 4) / 100} งาน | ${size / 4} ตารางวา | ${size} ตารางเมตร`;
}

// Input
rl.question("Select land measurement units (R, N, W or M)", function (unitInput) {
  const unit = unitInput.trim().toUpperCase();
  rl.question("Area size:", function (sizeInput) {
    const size = parseFloat(sizeInput);
    let result;
    // if statement
    if (unit === "R") {
      result = raiUnit(size);
      console.log(`${size} ${unit} covert to ${result.toFixed(2)}F`);
    } else if (unit === "N") {
      //
    } else if (unit === "W") {
      //
    } else if (unit === "M") {
      //
    } else {
      console.log(`Invalid area size! Please enter area number.`);
    }
    rl.close();
  });
});