function helloBasic<T, U>(message: T, comment: U): T {
  return message
}

helloBasic<string, number>('Mark', 39)
helloBasic(36, 39) // 지정하지 않으면 가장 좁은 범위의 타입을 추론하기 때문에, number 타입이 아니라 36이라는 타입을 고정한다.
