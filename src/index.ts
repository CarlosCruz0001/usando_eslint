import { join } from 'path'

import { user } from './User'

console.log('Olá!')

export const isAdult = (age: number) => {
  if (age >= 18) {
    return true
  }
  return false
}

// complexidade sintomática? swich case conta??
export const whatever = (n: number) => {
  if (n === 2) {
    return 2
  } else if (n < 2) {
    return -1
  }
  return 0
}

const obj = { name: 'Fulano', phone: '(99) 99999-9999' }

//oque é e para que serve associação por desestruturação?
const { name } = obj
console.log(name)

const path = join(__dirname, '..')
const User = new user('Fulano de tal', 'fulanoo@email.com')
console.log(path, User)
