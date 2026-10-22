import { post as marketUpdate } from "./market-update";
import { post as seaSummitTracts } from "./sea-summit-tracts";
import { post as talegaHoa } from "./talega-hoa-mello-roos";
import { post as shorecliffsClub } from "./shorecliffs-beach-club";
import { post as halloween } from "./halloween-events-2026";
import { post as seaPointe } from "./sea-pointe-estates";
import { post as peerCities } from "./peer-cities";
import { post as moving } from "./moving";
import { post as buying } from "./buying";
import { post as pierBowlVsTalega } from "./pier-bowl-vs-talega";
import { post as beachTrail } from "./beach-trail";
import { post as pickABeach } from "./pick-a-beach";
import type { Post } from "./types";

export type { Post, Block } from "./types";

// Newest first. Posts share dates, so array order breaks ties: add new posts at the front.
export const posts: Post[] = [halloween, seaPointe, shorecliffsClub, talegaHoa, seaSummitTracts, marketUpdate, peerCities, moving, buying, pierBowlVsTalega, beachTrail, pickABeach];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
