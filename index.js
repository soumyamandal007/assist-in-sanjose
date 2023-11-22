function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function isEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const bool = emailRegex.test(email);

  if (bool) {
    console.log("Validated Email");
  } else {
    console.log("Non- Validated Email");
  }
  return bool
}

module.exports = { add, minus, isEmail };
