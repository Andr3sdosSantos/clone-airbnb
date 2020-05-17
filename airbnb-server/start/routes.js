'use strict'

const Route = use('Route')
const Helpers = use('Helpers')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('Properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')

Route.post('/properties/:id/images', 'ImageController.store')
  .middleware('auth')
