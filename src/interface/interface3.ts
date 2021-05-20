interface Person3 {
  name: string
  age?: number
  [index: string]: any // indexable에서는 string으로만 쓴다. indexable은 Person3['anyone'] 등등으로 쓰일 수 있다.
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p31: Person3 = {
  name: 'Mark',
  age: 39
}

const p32: Person3 = {
  name: 'Anna',
  sisters: ['Sung', 'Chan']
}

const p33: Person3 = {
  name: 'Bokdaengi',
  father: p31,
  mother: p32
}

hello3(p33['father'])
