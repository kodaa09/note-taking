import Tag from '#models/tag'
import type { HttpContext } from '@adonisjs/core/http'

export default class TagsController {
  async index({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const userId = user.id

    const invoices = await Tag.query().where('user_id', userId)

    return response.status(200).json(invoices)
  }

  async store({ request, response }: HttpContext) {
    const { name } = request.only(['name'])
    const tag = Tag.create({ name })

    return response.status(200).send(tag)
  }

  async show({ response, request }: HttpContext) {
    const id = request.param('id')
    const tag = await Tag.findOrFail(id)

    return response.status(200).json(tag)
  }

  async destroy({ request, response }: HttpContext) {
    const id = request.param('id')
    const tag = await Tag.findOrFail(id)

    await tag.delete()

    return response.status(200).json({ message: 'Deleted successfully.' })
  }
}
