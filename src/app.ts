//Inputs
const button= document.querySelector(".button1") as HTMLButtonElement;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//classes

class Invoice {
    client: string;
    details: string;
    amount: number;
    

    constructor (client:string,details:string,amount:number){
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    print() {
        console.log(`Client ${this.client} owes $${this.amount} for ${this.details}`);    
    }

}

// test button
function text():any{
    button.innerHTML = "clicked";
};

button.addEventListener("click", function(){
    text();
});
//const invoice = new Invoice(tofrom, details, amount);
 const invOne = new Invoice("Mario", "Website work", 200);
 console.log(invOne);
//Handle form data
form.addEventListener("submit",(e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value , details.value, amount.valueAsNumber);
});