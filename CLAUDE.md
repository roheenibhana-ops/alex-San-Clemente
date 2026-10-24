# Working on lifeinsanclemente.com

Read `MAINTENANCE.md` first (schedule, checklists, cross-linking and content rules). This file is the short version for any Claude session.

## What this is
A Next.js static site for Alex Yu (Alex Yu Team, San Clemente real estate), deployed to Cloudflare Workers from `main`. Blog posts are data files in `lib/posts/`, registered in `lib/posts/index.ts` (newest first). Images are mapped in `lib/images.ts`. Photos we have are in `assets/photo-library/` (originals, not served); web copies go in `public/images/`.

## Publishing a post (checklist)
1. Research with real sources first (official sources before listing sites). Read the page, not just the search snippet. Flag anything unconfirmed and leave out anything you cannot source.
2. Create `lib/posts/<slug>.ts` (copy the shape of an existing post: takeaways, blocks, faqs, links). Include a short "In short" callout first, answer-first openers under H2s, tables where useful, a soft call to action, 2 or more internal links and 2 or more tested external links. Aim for 1,400+ words of prose; do not pad.
3. Add a hero photo: use a fitting photo from `assets/photo-library/` (or `assets/photo-library/stock/`), resize to about 1800px JPG, save in `public/images/blog/<slug>.jpg`, and add an entry to `lib/images.ts` with honest alt text (describe what is visible, never name a place unless confirmed).
4. Register the post in `lib/posts/index.ts` at the FRONT of the array. Add a row to the "start here" table in `components/BlogIndex.tsx`, a link from the matching neighborhood in `relatedMap` (`app/neighborhoods/[slug]/page.tsx`), and links from at least two older related posts.
5. Test every external link (curl, status 200; some sites block bots, in which case do not link them). Run `npm run build`.
6. Commit with a clear message and push to `main`. Also push to `claude/nice-clarke-1duto5`.
7. Add the post to `CONTENT_QUEUE.md` log (done list).

## Hard rules
- Fair housing: no school-quality claims, no "family-friendly", no "safe neighborhood", no saying who should or should not live somewhere.
- Illustrative scenarios must be labeled as illustrative. Never invent testimonials, quotes, rankings, guarantees or results.
- Never put API keys or secrets in the repo.
- Do not publish SERHANT or any new brokerage details until Alex supplies them and the move date arrives (First Team Real Estate is current).
- Do not copy text from other sites. Alex's main site (besthomesorangecounty.com) covers broad Orange County; this site covers San Clemente in depth. Avoid duplicating its posts ("Living in SC" surf-town guide, Ladera Ranch vs Rancho Mission Viejo vs Talega).
