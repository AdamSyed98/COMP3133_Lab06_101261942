class Customer3 {
    private firstName: string;
    private lastName: string;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }

    greeter() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
}

let customer = new Customer3("John", "Doe");
customer.greeter();