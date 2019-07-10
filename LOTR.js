function creatCharacter() {
    return {
     name:'name',
     nickname,
     race,
     origin,
     attack,
     defense,
     describe: function(){
         return `${this.name} is a ${this.race} from ${this.origin}.`;
     };
    }