const button= document.querySelector(".button1") as HTMLButtonElement;
//console.log(`${button.innerHTML}, ${button.style}`);
function text():any{
    button.innerHTML = "clicked";
};

button.addEventListener("click", function(){
    text();
});