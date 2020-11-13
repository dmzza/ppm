import { Ctx } from "blitz"
import db, { LinkUpdateArgs } from "db"

type UpdateLinkInput = Pick<LinkUpdateArgs, "where" | "data">

export default async function updateLink({ where, data }: UpdateLinkInput, ctx: Ctx) {
  ctx.session.authorize()

  const link = await db.link.update({ where, data })

  return link
}
