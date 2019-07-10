let person1 = {
    name:'Bill',
    jobTitle: 'writer'
};

let person2 = {
    name: 'Bev',
    jobTitle: 'designer'
};

let person3 = {
    name: 'Stanley',
    jobTitle: 'accountant'
};

let person4 = {
    name: 'Georgie',
    jobTitle: 'sailor'
};

let employees = [person1, person2, person3, person4];

employees.forEach(function(person) {
console.log(`${person.name}: ${person.jobTitle}`);
});
