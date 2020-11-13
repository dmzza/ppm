import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstLinkArgs } from "db"

type GetLinkInput = Pick<FindFirstLinkArgs, "where">

export default async function getLink({ where }: GetLinkInput, ctx: Ctx) {
  ctx.session.authorize()

  const link = await db.link.findFirst({ where })

  if (!link) throw new NotFoundError()

  return link
}
