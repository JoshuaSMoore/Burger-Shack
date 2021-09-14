import { fakeDb } from '../db/fakeDb.js'
import { BadRequest, NotFound } from '../utils/Errors.js'

class BurgerService {
  getById(id) {
    const found = fakeDb.burgers.find(b => b.id.toString() === id)
    if (!found) {
      throw new NotFound('No Burger with this ID' + id)
    }
    return found
  }

  createBurger(burgerData) {
    const found = fakeDb.burgers.find(b => b.name === burgerData.name)
    if (found) {
      throw new BadRequest('Burger Already Present')
    }
    burgerData.id = Math.floor(Math.random() * 30)

    fakeDb.burgers.push(burgerData)
    return burgerData
  }
}

export const burgersService = new BurgerService()
