'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerSchema extends Schema {
  up () {
    this.create('owners', (table) => {
      table.increments()
      table.timestamps()
       table.string('first_name', 254).notNullable()
        table.string('last_name', 254).notNullable()
      table.string('address', 254).notNullable()
    })
  }

  down () {
    this.drop('owners')
  }
}

module.exports = OwnerSchema
