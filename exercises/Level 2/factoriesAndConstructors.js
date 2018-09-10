// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
};
// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

let address1 = createAddress('a', 'b', 'c');
console.log(address1);

let address2 = new Address('d', 'e', 'f');
console.log(address2);