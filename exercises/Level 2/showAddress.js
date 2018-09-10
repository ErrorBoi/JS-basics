address = {
    street: 'Novoizmaylovskiy',
    city: 'Saint-Petersburg',
    zipCode: 196128
};

function showAddress(address) {
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);