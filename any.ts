function returnAny(message: any): any {
  console.log(message)
}

const any1 = returnAny('return is any')

any1.toString()

let looselyTypes: any = {}

const d = looselyTypes.a.b.c.d

function leakingAny(obj: any) {
  const a: number = obj.num // type guard
  const b = a + 1
  return b
}

const c = leakingAny({ num: 0 })
c.indexOf('0') // this line error make because c is number
