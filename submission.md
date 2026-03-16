# COMP3133 Lab 6 Submission - Student ID: 101261942

## Exercise 1: Hello World

### hello-world.js
```javascript
console.log("Hello, World!");
```

### hello-world.ts
```typescript
console.log("Hello, World!");
```

## Exercise 2: Customer Class

### customer.js
```javascript
var Customer2 = /** @class */ (function () {
    function Customer2(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer2.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer2;
}());
var customer = new Customer2("John", "Doe");
customer.greeter();
```

### customer.ts
```typescript
class Customer2 {
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

let customer = new Customer2("John", "Doe");
customer.greeter();
```

## Exercise 3: Customer Class

### customer.js
```javascript
var Customer3 = /** @class */ (function () {
    function Customer3(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer3.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer3;
}());
var customer = new Customer3("John", "Doe");
customer.greeter();
```

### customer.ts
```typescript
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
```

## Exercise 4: Complete Implementation

### customer.js
```javascript
var Customer4 = /** @class */ (function () {
    function Customer4(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer4.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer4;
}());
```

### customer.ts
```typescript
class Customer4 {
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
```

### main.js
```javascript
var Customer4 = /** @class */ (function () {
    function Customer4(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer4.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer4;
}());
var customer = new Customer4("John", "Doe");
customer.greeter();
```

### main.ts
```typescript
class Customer4 {
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

let customer = new Customer4("John", "Doe");
customer.greeter();
```

## GitHub Repository
All code is available at: https://github.com/AdamSyed98/COMP3133_Lab06_101261942.git

## Build Instructions
- Install dependencies: `npm install`
- Build TypeScript: `npm run build`
- Run: `npm start`