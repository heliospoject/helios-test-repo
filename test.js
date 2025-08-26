function checkValue(val) {
  // SonarCloud will flag this double-equals as a bad practice.
  if (val == 5) {
    console.log("Value is 5!");
  }
}
checkValue(5);
