const user = { id: 1, name: 'Gorib Aamir', job: 'actor' };
/* JavaScript object notation */
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);



const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet bhoot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'keyboard', 'monitor'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);