exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.bigincrements('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
  })

exports.down = knex => knex.schema.dropTableIfExists('users')
