import { post as marketUpdate } from "./market-update";
import { post as peerCities } from "./peer-cities";
import { post as moving } from "./moving";
import { post as buying } from "./buying";
import { post as pierBowlVsTalega } from "./pier-bowl-vs-talega";
import { post as beachTrail } from "./beach-trail";
import { post as pickABeach } from "./pick-a-beach";
import type { Post } from "./types";

export type { Post, Block } from "./types";

export const posts: Post[] = [marketUpdate, peerCities, moving, buying, pierBowlVsTalega, beachTrail, pickABeach];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
