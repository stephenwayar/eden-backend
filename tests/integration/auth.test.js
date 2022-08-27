const api = require('../helpers/api')
const logger = require('../../utils/logger')
const mongoose = require('mongoose')

describe('Auth-signin', () => {
  test('signin user with right credentials', async () => {
    const user = {
      email: 'stephenbuluswayar@gmail.com',
      password: 'stephenbuluswayar@gmail.com'
    }

    await api
      .post('/api/auth/login/user')
      .send(user)
      .set("Accept", "application/json")
      .expect(response => logger.info(response))
      .expect(200)
  }, 50000)

  test('signin admin with right credentials', async () => {
    const admin = {
      email: 'admin@admin.com',
      password: 'admin@admin.com',
    }

    await api
      .post('/api/auth/login/admin')
      .send(admin)
      .set("Accept", "application/json")
      .expect(response => logger.info(response))
      .expect(200)
  }, 50000)

  test('attempt signing in user with wrong credentials', async () => {
    const user = {
      email: 'stephenbuluswayar@gmail.com',
      password: 'wrongpassword'
    }

    await api
      .post('/api/auth/login/user')
      .send(user)
      .set("Accept", "application/json")
      .expect(response => logger.info(response))
      .expect(401)
  }, 50000)

  test('attempt signing in admin with wrong credentials', async () => {
    const admin = {
      email: 'admin@admin.com',
      password: 'password',
    }

    await api
      .post('/api/auth/login/admin')
      .send(admin)
      .set("Accept", "application/json")
      .expect(response => logger.info(response))
      .expect(401)
  }, 50000)
})

describe('Auth-signup', () => {
  test.only('signup user', async () => {
    const user = {
      firstName: 'stephen',
      lastName: 'bulus',
      email: 'stephenbuluswayar@gmail.com',
      password: 'stephenbuluswayar@gmail.com',
      phone_number: 123456789
    }

    await api
      .post('/api/auth/register/user')
      .send(user)
      .set("Accept", "application/json")
      .expect(response => logger.info(response))
      .expect(201)
  }, 100000)

  test('signup administrator', async () => {
    const admin = {
      firstName: 'john',
      lastName: 'doe',
      email: 'admin@admin.com',
      password: 'admin@admin.com',
    }

    await api
      .post('/api/auth/register/admin')
      .send(admin)
      .set("Accept", "application/json")
      .expect(response => logger.info(response))
      .expect(201)
  }, 100000)

  test('attempt signing up user with errored credentials', async () => {
    const user = {
      firstName: '',
      lastName: '',
      email: 'janedoe@gmail.com',
      password: 'few'
    }

    await api
      .post('/api/auth/register/user')
      .send(user)
      .set("Accept", "application/json")
      .expect(response => logger.info(response))
      .expect(401)
  }, 50000)

  test('attempt signing up admin with wrong credentials', async () => {
    const admin = {
      lastName: '',
      email: 'admin@gmail.com',
    }

    await api
      .post('/api/auth/register/admin')
      .send(admin)
      .set("Accept", "application/json")
      .expect(response => logger.info(response))
      .expect(401)
  }, 50000)

  afterAll(() => {
    mongoose.connection.close()
  })
})