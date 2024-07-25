export function randomHexGenerator() {
  let hexcode = "#";
  let hexDigit = "";
  while (hexcode.length <= 6) {
    hexDigit = "" + Math.floor(Math.random() * 15 + 1);

    if (hexDigit >= 10) {
      switch (hexDigit) {
        case "10":
          hexDigit = "A";
          break;
        case "11":
          hexDigit = "B";
          break;
        case "12":
          hexDigit = "C";
          break;
        case "13":
          hexDigit = "D";
          break;
        case "14":
          hexDigit = "E";
          break;
        case "15":
          hexDigit = "F";
          break;
      }
    }
    hexcode = hexcode + hexDigit;
  }
  return hexcode;
}
