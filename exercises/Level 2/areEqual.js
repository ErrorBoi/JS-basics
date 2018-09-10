// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

let address1 = new Address('d', 'e', 'f');
let address2 = new Address('d', 'e', 'f');

function areEqual(address1, address2) {
    for(let key in address1)
        if (address1[key] !== address2[key]) return false;
    return true;
}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));