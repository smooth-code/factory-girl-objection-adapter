import Knex from 'knex'
import { Model } from 'objection'
import User from './User'
import factory from './factory'
import knexConfig from '../knexfile'

describe('ObjectionAdapter', () => {
  let knex

  beforeAll(async () => {
    knex = Knex(knexConfig)
    Model.knex(knex)
    await knex.migrate.latest()
  })

  afterAll(
    async () =>
      new Promise((resolve, reject) =>
        knex.destroy(error => {
          if (error) {
            reject(error)
          } else {
            resolve()
          }
        }),
      ),
  )

  it('should build model', async () => {
    const model = await factory.build('user', { name: 'James' })
    expect(model.name).toBe('James')
    expect(model).toBeInstanceOf(User)
  })

  it('should create model', async () => {
    const model = await factory.create('user', { name: 'James' })
    expect(model.name).toBe('James')
    expect(model.id).toBeDefined()
    expect(model).toBeInstanceOf(User)
  })

  it('should remove model', async () => {
    const model = await factory.create('user', { name: 'James' })
    expect(model.name).toBe('James')
    expect(model.id).toBeDefined()
    expect(model).toBeInstanceOf(User)

    expect(await User.query().where('id', model.id)).toHaveLength(1)
    await factory.cleanUp()
    expect(await User.query().where('id', model.id)).toHaveLength(0)
  })
})
