const today = new Date();
const day = today.getDay();

function changeDate() {
  let color = "yellow";
  if (day === 0) {
    color = "red";
  } else if (day === 1) {
    color = "goldenrod";
  } else if (day === 2) {
    color = "red";
  } else if (day === 3) {
    color = "goldenrod";
  } else if (day === 4) {
    color = "red";
  } else if (day === 5) {
    color = "goldenrod";
  } else if (day === 6) {
    color = "red";
  }
  document.body.style.color = color;
}

changeDate();

function downloadResume() {
  let button = document.getElementsByClassName("resumeButton")[0];
  button.onclick = function () {
    let link = document.createElement("a");
    // Change the structure of the URL to be a direct download link
    link.href =
      "https://drive.google.com/uc?export=download&id=1aNBEBVoiHMLO3PKhBjQmYKTvrFgE2yeW";
    link.download = "My-Resume.pdf";
    link.click();
  };
}
downloadResume();
