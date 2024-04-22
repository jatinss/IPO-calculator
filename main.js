// equation for finding slope

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnclickied);

function btnclickied() {
  // Input
  let x1 = +document.getElementById("x1-in").value;
  let y1 = document.getElementById("y1-in").value;
  let x2 = document.getElementById("x2-in").value;
  let y2 = document.getElementById("y2-in").value;

  // Process
  let Slope = (y2 - y1) / (x2 - x1);

  // output
  document.getElementById("output").innerHTML = Slope;
}
