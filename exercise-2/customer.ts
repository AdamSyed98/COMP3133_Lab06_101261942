class Customer2 {
    firstName!: string;
    lastName!: string;

    greeter() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
}

let customer = new Customer2();
customer.firstName = "John";
customer.lastName = "Doe";
customer.greeter();