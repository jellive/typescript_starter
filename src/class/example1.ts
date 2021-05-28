class ClassPerson {
  //    name: string
  //   private _age: number
  //   protected age: number // 외부에서 접근은 안 되지만, 상속받은 친구들은 접근이 된다.
  //    age: number
  //   age: number = 0

  public readonly readname: string = 'Mark'
  private readonly readcountry: string = 'Korea' // 추가로 constructor에서도 변경할 수 있다.
  constructor(private _name: string, public age: number) {}
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

  get name() {
    console.log('get', this._name)
    return this._name
  }
  set name(n: string) {
    console.log('set', n)
    this._name = n
  }
  hello() {
    // this.readname = '' // error!
  }
}

const cp1 = new ClassPerson('mark', 39)

console.log(cp1.name)
cp1.name = 'jell'
