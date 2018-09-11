'use strict'

/*
|--------------------------------------------------------------------------
| InitDataSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class InitDataSeeder {
  async run () {

    const user = await User.create({username: 'test', password: 'test', email: 'test'})

    await user.contacts().createMany([{name: 'test1'}, {name: 'test2'}])

  }
}

module.exports = InitDataSeeder
