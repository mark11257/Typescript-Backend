//Inputs
const button= document.querySelector(".button1") as HTMLButtonElement;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
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

//const invoice = new Invoice(tofrom, details, amount);
//  const invOne = new Invoice("Mario", "Website work", 200);
//   const invTwo = new Invoice("Amir", "Website work", 300);
//    const invThree = new Invoice("Mina", "Website work", 400);
//  invoices.push(invOne);
//  invoices.push(invTwo);
//   invoices.push(invThree);
 const invoices :Invoice[] = [];
//Handle form data

form.addEventListener("submit",(e: Event) => {
    e.preventDefault();
    const temp = new Invoice(tofrom.value,details.value, amount.valueAsNumber);
    invoices.push(temp);
    
});
 invoices.forEach(inv =>{
    inv.print();
  });

  // test button
function text():any{
    button.innerHTML = "clicked";
};

button.addEventListener("click", function(){
    text();
});