import { Ctx } from "blitz"
import db, { FindManyLinkArgs } from "db"

type GetLinksInput = Pick<FindManyLinkArgs, "where" | "orderBy" | "skip" | "take">

export default async function getLinks(
  { where, orderBy, skip = 0, take }: GetLinksInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const links = await db.link.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.link.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    links,
    nextPage,
    hasMore,
    count,
  }
}
