//ESERCIZIO 1

class User {
    constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName
      this.lastName = _lastName
      this.age = _age
      this.location = _location
    }  

  compareAges = function(anotherUser){
   if (this.age >anotherUser.age) {
    return `${this.firstName} ${this.lastName} e piu vecchio di ${ anotherUser.firstName} ${anotherUser.lastName}`
   }else if (this.age < anotherUser.age) {
    
   }
  }
}


const u1 = new User ('Mimmo','Bianchi','30','Roma',)
const u2 = new User ('Giovanna','Rossi','45','Milano',)
console.log (u1)
console.log (u2)





//ESERCIZIO 2

