'use strict'

const Model = use('Model')

class Contact extends Model {

  static boot() {
    super.boot()

    this.addTrait('CustomPaginate')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }

}

module.exports = Contact
