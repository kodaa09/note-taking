import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
import User from '#models/user'

export default class UsersController {
  static validator = vine.compile(
    vine.object({
      email: vine.string().email(),
      password: vine.string(),
    })
  )

  async signup({ request, response }: HttpContext) {
    const { fullName, email, password } = request.only(['fullName', 'email', 'password'])

    const user = await User.create({
      fullName,
      email,
      password,
    })

    if (!user) {
      return response.status(404).json({ message: 'Utilisateur deja enregistré' })
    }

    return response.status(200).send(user)
  }

  async login({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(UsersController.validator)

    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)

    return response.status(200).send(user)
  }

  async me({ auth, response }: HttpContext) {
    try {
      const isAuthenticated = await auth.use('web').check()

      if (isAuthenticated) {
        const user = auth.use('web').user
        if (!user) return response.status(200).send({ error: 'Non authentifié' })

        await user.load('address')
        return response.status(200).send(user)
      } else {
        return response.status(401).send({ error: 'Non authentifié' })
      }
    } catch (error) {
      return response.status(500).send({ error: 'Erreur interne du serveur' })
    }
  }

  async logout({ auth }: HttpContext) {
    return await auth.use('web').logout()
  }
}
