// Only published, routable entries are sent to the browser.
import { getCollection } from 'astro:content';
import { toRouteSlug } from './urlSlug';
import { extractSearchText } from './searchText';

const entries = [
  ...await getCollection('notes', ({ data }) => data.public),
  ...await getCollection('stuff', ({ data }) => data.public),
];

export const searchIndex = entries.map((entry) => ({
  title: entry.data.title,
  description: entry.data.description ?? '',
  tags: entry.data.tags,
  slug: `/${entry.collection}/${toRouteSlug(entry.id)}/`,
  content: extractSearchText(entry.body ?? '', entry.filePath?.endsWith('.mdx')),
  type: entry.collection,
}));
