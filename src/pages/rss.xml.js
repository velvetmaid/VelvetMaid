import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { toRouteSlug } from '../utils/urlSlug';

export async function GET(context) {
	const posts = await getCollection('notes', ({ data }) => data.public);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/notes/${toRouteSlug(post.id)}/`,
		})),
	});
}
