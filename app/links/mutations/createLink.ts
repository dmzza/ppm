import { Ctx } from "blitz"
import db, { LinkCreateArgs } from "db"

type CreateLinkInput = Pick<LinkCreateArgs, "data">
export default async function createLink({ data }: CreateLinkInput, ctx: Ctx) {
  ctx.session.authorize()

  const link = await db.link.create({ data })

  return link
}
