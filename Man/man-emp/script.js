const addReason = document.getElementById("addReason");
const addReasonform = document.getElementById("addReason-form");
const addReasonClose = document.getElementById("addReason-close");
const overlay = document.getElementById('overlay-cover');

addReasonform.style.display = "none";
console.log("done");

addReason.addEventListener("click", () => {
  addReasonform.style.display = "block";
  overlay.style.backgroundColor=  "black";
        overlay.style.zIndex=  "1";
});

addReasonClose.addEventListener("click", () => {
  addReasonform.style.display = "none";
  overlay.style.backgroundColor=  "#fff0";
    overlay.style.zIndex=  "0";
});
