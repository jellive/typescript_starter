class ClassPerson {
  name: string = 'Mark'
  age: number
  //   age: number = 0
  // constructor(name: string) {
  //   this.name = name
  // }
  constructor(age?: number) {
    // constructor는 async-await를 사용할 수 없다.
    if (!age) {
      this.age = 20
    } else {
      this.age = age
    }
  }
}

const cp1 = new ClassPerson()

console.log(cp1)
