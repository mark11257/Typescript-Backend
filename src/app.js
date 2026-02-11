var button = document.querySelector(".button1");
//console.log(`${button.innerHTML}, ${button.style}`);
function text() {
    button.innerHTML = "clicked";
}
;
button.addEventListener("click", function () {
    text();
});
