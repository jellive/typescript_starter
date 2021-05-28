class PersonExtends<T extends string | number> {
  // T를 string | number로 제한한다. Generic에서 extends는 확장이 아니라 제한임.
  constructor(private _name: T) {}
}

new PersonExtends('Mark')
new PersonExtends(39)
// new PersonExtends(true)
