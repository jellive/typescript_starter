class ClassPerson {
  //    name: string
  //   private _age: number
  //   protected age: number // 외부에서 접근은 안 되지만, 상속받은 친구들은 접근이 된다.
  //    age: number
  //   age: number = 0
  constructor(public name: string, public age: number) {}
  // constructor(name: string) {
  //   this.name = name
  // }
  //   constructor(age?: number) {
  //     // constructor는 async-await를 사용할 수 없다.
  //     if (!age) {
  //       this.age = 20
  //     } else {
  //       this.age = age
  //     }
  //   }
}

const cp1 = new ClassPerson('mark', 39)

console.log(cp1)
