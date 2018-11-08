var nameVar = 'Andrew';
var namevar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'Gunther';
console.log('nameConst', nameConst);

const fullName = 'Jen Mead';
let firstName;
let lastName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    lastName = fullName.split(' ')[1];
    console.log(firstName);
}
console.log(firstName+' '+lastName);
