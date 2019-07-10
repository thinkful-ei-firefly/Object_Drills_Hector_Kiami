let person1 = {
    name: 'Jessie',
    jobTitle: 'developer'
}

let person2 = {
    name: 'Bob',
    jobTitle: 'engineer'
}

let person3 = {
    name: 'Abbey',
    jobTitle: 'secretary'
}

let person4 = {
    name: 'Billy',
    jobTitle: 'janitor'
}
let employees = [person1, person2, person3, person4];

employees.forEach(function(person) {
    console.log (`${person.name}: ${person.jobTitle}`);
});