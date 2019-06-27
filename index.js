const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || e.which);
    if (key === code[index]) {
      if (index === code.length - 1) {
        alert("Congration! you complete this game!");
        index = 0;
      } else {
        index += 1;
      }
    }
  })
}
