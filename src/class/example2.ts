// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

class Students {
  [index: string]: 'male' | 'female'
}

const sClassA = new Students()
sClassA.mark = 'male'
sClassA.jade = 'male'

console.log(sClassA)

const sClassB = new Students()
sClassB.chloe = 'female'
sClassB.alex = 'male'
sClassB.anna = 'female'
