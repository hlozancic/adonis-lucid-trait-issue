'use strict'

const { test } = use('Test/Suite')('Example')

const User = use('App/Models/User')
const Contact = use('App/Models/Contact')

test('Try loading custom trait on User model', async ({assert}) => {
  await User.query().customPaginate()
})

test('Try loading custom trait on Contact model', async ({assert}) => {
  await Contact.query().customPaginate()
})

test('Find user, and then load paginated contacts without trait', async ({assert}) => {
  const userInstance = await User.find(1)
  await userInstance.contacts().paginate() // works
})

test('Find user, and then load paginated contacts using trait', async ({assert}) => {
  const userInstance = await User.find(1)
  await userInstance.contacts().customPaginate() // breaks
})

