class Animal {
  constructor (name, dateOfBirth = new Date()) {
    this.name = name
    this.dateOfBirth = new Date(dateOfBirth)
  }

  getDateofBirth () {
    return this.dateOfBirth
  }
  getAge () {
    let currentYear = new Date().getFullYear()
    let yearOfBirth = this.dateOfBirth.getFullYear()
    let currentAge = currentYear - yearOfBirth
    return currentAge
  }
  toString () {
    return 'This Animal is called ' + this.name + ' it is currently ' + this.getAge() + ' years old!'
  }
}

class Mammal extends Animal {
  constructor (name, dateOfBirth, gender = 'unknown', species = 'unknows') {
    super(name, dateOfBirth)
    this.name = name
    this.dateOfBirth = dateOfBirth
    this.gender = gender
    this.species = species
  }
  static species () {
    return this.species
  }
  canReproduce () {
    if (this.gender === 'female') {
      return true
    } else {
      return false
    }
  }
  babyMade (name) {
    return new Mammal(name)
  }
  runSpeed (distance, time) {
    return distance * time
  }
  swimSpeed (distance, time) {
    return distance * time
  }
}

class Reptile extends Animal {
  constructor (name, dateOfBirth, gender = 'unknown', species = 'unknown') {
    super(name, dateOfBirth)
    this.name = name
    this.dateOfBirth = dateOfBirth
    this.gender = gender
    this.species = species
  }
  static species () {
    return this.species
  }
  canReproduce () {
    if (this.gender === 'female') {
      return true
    } else {
      return false
    }
  }
  layedEggs (arrOfName) {
    let eggs = []
    arrOfName.forEach(function (name) {
      eggs.push(new Reptile(name))
    })
  }
  runSpeed (distance, time) {
    return distance * time
  }
  swimSpeed (distance, time) {
    return distance * time
  }
}

let lion = new Mammal('Mufasa', '7/21/1990', 'male', 'Feline')
let lionCub = lion.babyMade('Simba')

let crocodile = new Reptile('Tick-Tock-Croc', '2/5/1953')

console.log(lion)
console.log(lionCub)
console.log(crocodile)
