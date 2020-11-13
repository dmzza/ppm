import { Ctx } from "blitz"
import db, { LinkDeleteArgs } from "db"

type DeleteLinkInput = Pick<LinkDeleteArgs, "where">

export default async function deleteLink({ where }: DeleteLinkInput, ctx: Ctx) {
  ctx.session.authorize()

  const link = await db.link.delete({ where })

  return link
}
