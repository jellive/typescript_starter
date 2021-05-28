class GPerson<T, K> {
  private _name: T
  private _age: K

  constructor(name: T, age: K) {
    this._name = name
    this._age = age
  }
}

// new GPerson('Mark')
new GPerson<string, number>('Chloe', 23)
