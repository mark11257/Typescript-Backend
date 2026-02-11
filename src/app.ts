const button= document.querySelector(".button1") as HTMLButtonElement;
//console.log(`${button.innerHTML}, ${button.style}`);
function text():any{
    button.innerHTML = "clicked";
};

button.addEventListener("click", function(){
    text();
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value , details.value, amount.valueAsNumber);
});