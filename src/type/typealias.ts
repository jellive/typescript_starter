/**
 * Type alias(별칭)
 * interface와 비슷해 보임.
 * Type alias는 Primitive, Union Type, Tuple, Function 등과 같은 친구들을 대상으로 사용 가능.
 * 기타 직접 작성해야 하는 타입을 다른 이름으로 지정할 수 있음.
 * 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아님.
 */

 type MyStringType = string

 const str = 'world'
 let myStr: MyStringType = 'hello'
 myStr = str

 /**
  * Aliasing Union Type
  */

let aliasPerson: string | number = 0
aliasPerson = 'Mark'

type StringOrNumber = string | number

let another: StringOrNumber = 0
another = 'anna'

/**
 * Aliasing Tuple
 */

 let tuplePerson: [string, number] = ['Mark', 35]
type PersonTupe = [string, number]
let personAnother: PersonTupe = ['Anna', 24]

/**
 * Aliasing Function
 */

 type EatType = (food: MyStringType) => void