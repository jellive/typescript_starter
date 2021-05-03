/** 일반적으로 return 에 사용한다. 대부분 에러를 내거나, 무한히 지속되는 친구들을 사용한다.
 * 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.
 * 하지만, never에는 아무 것도(any포함) 할당 할 수 없다에
 * 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.
 */

function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('failed')
}

function infiniteLoop(): never {
  while (true) {}
}

let aaa: string = 'hello'
if (typeof a !== 'string') {
  a // never
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never // 조건 확장부 타입

type ObjectIndexable = Indexable<{}> // string이 아니면 never, string이면 [index: string]이 나온다.(실수를 줄일 수 있다.)
