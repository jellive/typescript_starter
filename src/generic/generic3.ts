function helloArray<T>(message: T[]): T {
  return message[0]
}

helloArray(['Hello', 'World']) // string
helloArray(['hello', 5]) // string | number

function helloTuple<T, K>(message: [T, K]): T {
  return message[0]
}
