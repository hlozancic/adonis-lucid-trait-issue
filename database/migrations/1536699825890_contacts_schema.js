'use strict'

const Schema = use('Schema')

class ContactsSchema extends Schema {
  up() {
    this.create('contacts', (table) => {
      table.increments()

      table.integer('user_id').unsigned().references('users.id')
      table.string('name')

      table.timestamps()
    })
  }

  down() {
    this.drop('contacts')
  }
}

module.exports = ContactsSchema
