'use strict'

function creatCharacter(name, nickname, race, origin, attack, defense) {
    return {
     name,
     nickname,
     race,
     origin,
     attack,
     defense,
     weapon,
     describe: function(){
         console.log(`${this.name} is a ${this.race} of the ${this.originorigin}
         who uses ${this.weapon}.`)},
     evaluateFight: function(character) {
         let damageTaken = character.attack - this.defense;
         let damageGiven = this.attack - character.defense;
         if (damageTaken < 0) {
             damageTaken = 0;
         }
         if (damageGiven < 0) {
             damageGiven = 0;
         }
         console.log(`Your opponent takes ${damageGiven} damage and receives ${damageTaken} damage.`);
        } 
    }
}
let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff');
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring');
let frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'a String and Barrow Blade');
let aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 6, 'a Andruil');
let legolas = createCharacter('Legolas', 'legolas', 'elf', 'Woodland Realm', 8, 5, 'a Bow and Arrow');
let arwen = createCharacter('Arwen Undomiel', 'ari', 'half-elf', 'Rivendell', 100, 100, 'a Hadhafang');

let characters = [gandalf, bilbo, frodo, aragorn, legolas];

console.log(
characters.find(character => character.nickname === 'aragon').describe()
);

const hobbitArray = characters.filter(
    characters => characters.race === 'hobbit'
);
console.log(hobbitArray);

const highAttack = characters.filter(
    characters => characters.attack > 5
);
console.log(highAttack);