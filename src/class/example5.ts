// inheritance

class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print() {
    console.log(`이름: ${this._name}, 나이: ${this._age}`)
  }

  protected printName() {
    console.log(this._name)
  }
}

const p = new Parent('Mark', 39)
p.print()

class Child extends Parent {
  //   protected _name = 'Mark Jr.'
  public gender = 'male'

  constructor(age: number) {
    // this.printName()
    super('Mark Jr.', age)
    this.printName()
  }
}

const ch = new Child(5)
ch.print()
