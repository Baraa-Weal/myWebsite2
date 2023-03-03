let CopyIcon1 = document.querySelector("#copy1");
let CopyIcon2 = document.querySelector("#copy2");

CopyIcon1.onclick = function myFunction() {
  let copyText = "+201557249455";
  navigator.clipboard.writeText("+201557249455");
  alert("Copied the text: " + copyText);
};
CopyIcon2.onclick = function myFunction() {
  let copyText = "+201090933733";
  navigator.clipboard.writeText("+201090933733");
  // alert("Copied the text: " + copyText);
};
