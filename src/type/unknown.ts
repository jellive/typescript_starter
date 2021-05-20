/**
 * 응용프로그램을 작성할 떄 모르는 변수의 타입을 묘사해야 할 수도 있다.
 * 이러한 값은 동적 콘텐츠(ex: form inputed value, API return value)에서 주로 나오는데, 우리는 모든 값을 의도적으로 수락하기를 원한다.
 * 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하기에 unknown을 사용한다.
 */

declare const maybe: unknown

if (typeof maybe === 'number') {
  const aNumber: number = maybe
}

if (maybe === true) {
  // 여기서는 maybe가 unknown이지만
  const aBoolean: boolean = maybe // 여기서는 maybe가 true이다. 이를 type guard라고 한다.
}

if (typeof maybe === 'string') {
  const aString = maybe
}
