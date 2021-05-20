function returnVoid(message: string) {
  console.log('message', message)

  return // 아무 것도 없이(혹은 undefined를 포함하여) return을 하면 void가 된다.
}

const r = returnVoid('리턴이 없다')
r
