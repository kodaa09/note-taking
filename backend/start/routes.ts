import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router
  .group(() => {
    router.post('/login', [UsersController, 'login'])
    router.post('/signup', [UsersController, 'signup'])
    router.post('/logout', [UsersController, 'logout'])
    router.get('/me', [UsersController, 'me'])
  })
  .prefix('api')
