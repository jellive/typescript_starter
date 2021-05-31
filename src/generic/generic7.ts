interface IPerson {
  name: string
  age: number
}

const iPerson: IPerson = {
  name: 'Mark',
  age: 39
}

type Keys = keyof IPerson
// const keys: Keys // name or age

// IPerson[keyof IPerson]
// => IPerson['name' | 'age']
// => IPerson['name'] | IPerson['age]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

getProp(iPerson, 'name')

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value
}

// setProp(iPerson, 'name', 39) // error!
setProp(iPerson, 'name', 'hi') // error!
