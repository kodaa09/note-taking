import Note from '#models/note'
import type { HttpContext } from '@adonisjs/core/http'

export default class NotesController {
  async index({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const userId = user.id

    const invoices = await Note.query().where('user_id', userId)

    return response.status(200).json(invoices)
  }

  async store({ request, response }: HttpContext) {
    const { title, content, isArchived, tags } = request.only([
      'title',
      'content',
      'isArchived',
      'tags',
    ])
    const note = await Note.create({ title, content, isArchived })

    for (const tag of tags) {
      await note.related('tags').create(tag)
    }

    await note.load('tags')

    return response.status(200).send(note)
  }

  async show({ response, request }: HttpContext) {
    const id = request.param('id')
    const note = await Note.findOrFail(id)

    return response.status(200).json(note)
  }

  async update({ params, request, response }: HttpContext) {
    const note = await Note.findOrFail(params.id)
    const { title, content, isArchived, tags } = request.only([
      'title',
      'content',
      'isArchived',
      'tags',
    ])

    note.merge({ title, content, isArchived })
    await note.save()

    if (tags && Array.isArray(tags)) {
      const tagIds: number[] = []

      for (const tag of tags) {
        const [tagRecord] = await tag.updateOrCreate(
          { name: tag.name }, // critère de recherche
          tag // données à mettre à jour ou créer
        )
        tagIds.push(tagRecord.id)
      }

      await note.related('tags').attach(tagIds)
    }

    return response.status(200).send(note)
  }

  async destroy({ request, response }: HttpContext) {
    const id = request.param('id')
    const note = await Note.findOrFail(id)

    await note.delete()

    return response.status(200).json({ message: 'Deleted successfully.' })
  }
}
