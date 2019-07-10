let person1 = {
    name:'Bill',
    jobTitle: 'writer'
};

let person2 = {
    name: 'Bev',
    jobTitle: 'designer',
    boss: 'Bill'
};

let person3 = {
    name: 'Stanley',
    jobTitle: 'accountant',
    boss: 'Bill'
};

let person4 = {
    name: 'Georgie',
    jobTitle: 'sailor',
    boss: 'Bill'
};

let employees = [person1, person2, person3, person4];

employees.forEach(function(person) {
    if (person.boss === 'Bill') {
console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
    }
    else {
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
    }
});
