// js object Notation
const user = {id:22, name:'Fakir', job:'fakrami'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name:'Batasha',
    address:'Mohakash',
    products : ['laptop', 'mobile', 'smart-watch'],
    owner: {
        name:'Sagir Bhai',
        profession:'Fishing-fishing'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);