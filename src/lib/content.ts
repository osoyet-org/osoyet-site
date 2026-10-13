import { getCollection } from 'astro:content';

// Kenya is UTC+3 all year (no daylight saving)
const KENYA_OFFSET_MS = 3 * 60 * 60 * 1000;

/** Today's date in Kenya as YYYY-MM-DD */
export function todayInKenya(): string {
  return new Date(Date.now() + KENYA_OFFSET_MS).toISOString().slice(0, 10);
}

/** A date as YYYY-MM-DD */
export function dayKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** For example: 14 November 2026 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Published news posts, newest first */
export async function getNews() {
  const posts = await getCollection('news', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Published events, split into upcoming (soonest first) and past (latest first) */
export async function getEvents() {
  const events = await getCollection('events', ({ data }) => !data.draft);
  const today = todayInKenya();
  const upcoming = events
    .filter((event) => dayKey(event.data.date) >= today)
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
  const past = events
    .filter((event) => dayKey(event.data.date) < today)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return { upcoming, past };
}
