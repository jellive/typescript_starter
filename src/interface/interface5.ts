interface IPerson1 {
  name: string
  age?: number
  hello(): void // 화살표 함수로하면 vscode가 엉뚱하게 코드를 구현해줌. 그래서 임시로 걍 넣어줌.
}

class Person implements IPerson1 {
  name: string
  age?: number | undefined
  constructor(name: string) {
    this.name = name
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }
}

const p51: Person = new Person('Mark')
p51.hello()
