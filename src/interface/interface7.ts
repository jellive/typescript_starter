interface HelloPerson {
  // 함수의 interface화.
  (name: string, age?: number): void
}

const helloPerson: HelloPerson = function (name: string) {
  // 여기서 helloPerson은 대입되는 함수는 중요치 않고, HelloPerson interface만 맞으면 됨.
  // 따라서 age에 optional을 해제하면 에러가 발생함.
  console.log(`안녕하세요! ${name} 입니다.`)
}

helloPerson('Mark')
