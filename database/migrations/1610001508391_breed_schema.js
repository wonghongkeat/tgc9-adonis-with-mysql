'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BreedSchema extends Schema {
  up () {
    this.create('breeds', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 254).notNullable()
    })
  }

  down () {
    this.drop('breeds')
  }
}

module.exports = BreedSchema
