abstract class AbstractPerson {
  protected _name: string = 'Mark'

  abstract setName(name: string): void
}

class APerson extends AbstractPerson {
  setName(name: string): void {
    // throw new Error('Method not implemented.')
    this._name = name
  }
}
