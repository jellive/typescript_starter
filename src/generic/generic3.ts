function helloArray<T>(message: T[]): T {
  return message[0]
}

helloArray(['Hello', 'World']) // string
helloArray(['hello', 5]) // string | number

function helloTuple<T, K>(message: [T, K]): T {
  return message[0]
}

helloTuple(['Hello', 123]) // string으로 정확하게 추론됨.
