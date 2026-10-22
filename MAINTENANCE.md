# Maintenance and refresh plan

How we keep lifeinsanclemente.com fresh. Anyone (a person or a Claude session) should be able to follow this.

## Schedule

| What | How often | Notes |
| --- | --- | --- |
| Neighborhood pages, home page market numbers, Home value stats, lifestyle guides | **Monthly**, last days of the month | Numbers people compare: prices, dues, inventory, days on market |
| Monthly market update | **Each month, as a new post** | Older months stay up as history. Number source below |
| Evergreen blog posts (buying, moving, neighborhood deep dives, HOA guides) | **Every 3 months** | Check facts, links and numbers. Set `updated` on the post |
| Event posts (Halloween, Thanksgiving, Christmas, others) | When dates are announced, then once a year | Keep the same URL and update it each year. Add confirmed dates, remove cancelled events |
| Sudden changes (big price move, new fee, city decision) | When it happens | Correct it right away |
| New posts | About two a week | Each new post links to and from older posts, see below |

## Monthly checklist (last days of the month)

1. **Market numbers.** Update `lib/market.ts` (`cityMarket`, `peerCities`, `marketAsOf`, `marketSource`) and the figures in `lib/content.ts` (`market`, `stats`) if they changed. Update neighborhood stats in `lib/neighborhoods.ts` and `lib/neighborhoodDeep.ts`.
2. **Neighborhood MLS numbers.** Ask Alex's team for a monthly export from Sierra or CRMLS for each area: sold count, median sold price, median days on market, active listings, list-to-sale ratio. Public sources are thin and Redfin and other listing sites block automated access.
3. **New market update post.** Write the month's post from `lib/market.ts`, linked to the previous month and the neighborhood pages.
4. **Parks, trails and events.** Check `lib/hoodParks.ts` against the City's Parks & Sport Fields page, and the City calendar for upcoming events.
5. **Dues and fees.** Re-check HOA and Mello-Roos figures quoted in posts. Keep the "confirm for the exact home" wording.
6. **Links.** Test every external link. Fix or remove any that fail. Add new internal links.
7. **Search Console and GA4.** Note which pages gained impressions, clicks and leads. Rewrite titles and descriptions that get impressions but few clicks.
8. **Photos.** Swap stock or stand-in photos for real ones when Alex sends them (see `assets/photo-library/README.md`).

## Quarterly checklist (evergreen posts)

- Re-read the post, re-check every number and claim against its source, and fix anything that moved.
- Add new sections or links if there is something new (a new post, a new city page).
- Set `updated: "YYYY-MM-DD"` in the post file so readers and search engines see the date.
- Do not change the date just to change the date.

## Event posts

- Check dates against the official source: the City calendar (sanclemente.gov/calendar.aspx), the venue or organizer, and the Downtown Business Association.
- Label anything unconfirmed as unconfirmed. Do not copy a past year's date into a new year.
- Keep the URL. Update the title and year, the `updated` date and the table of events.
- Add official links (City, organizer, venue) for every event.

## Cross-linking rule

Whenever a new post goes up:
- Link it from the blog index "start here" table (`components/BlogIndex.tsx`).
- Link it from the matching neighborhood page (`relatedMap` in `app/neighborhoods/[slug]/page.tsx`).
- Add a link to it from at least two older, related posts.
- Link the new post to at least three existing pages and one or two official external sources.

## Content rules

- Every number has a source, and anything unverifiable is flagged or left out.
- No fair-housing problems: no school-quality claims, no "family-friendly", no "safe neighborhood", no describing who should or should not live somewhere.
- Illustrative scenarios are labeled as illustrative, never presented as real testimonials.
- No claims about rankings, guarantees or results that Alex has not approved.
- Photos: use only photos we have the right to use. Alt text describes what is visible. Do not name a location unless it is confirmed.
- Order posts newest first in `lib/posts/index.ts` (posts share dates, so array order breaks ties).

## Accounts and settings

- Hosting: Cloudflare Workers (project `alex-san-clemente`), deployed from the `main` branch.
- Site URL: `lib/site.ts`. GA4 ID: `components/Analytics.tsx`.
- Lead routing: `app/api/lead/route.ts`. Cloudflare variables `LEAD_DESTINATION` and `FUB_API_KEY` (secret). Rotate the key if it is ever shared.
- Search Console, GA4 and Bing Webmaster Tools are set up for lifeinsanclemente.com.

## What we still need from Alex

- Sign-off on claims (Top 1%, Platinum programs, Barbara Corcoran, RealTrends) and the market numbers.
- A monthly MLS export per neighborhood.
- Real local photos (food places, events, neighborhoods).
- Local knowledge for street-level detail: which streets sell fast, which are quiet, what buyers ask.
