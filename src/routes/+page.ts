import type { PageLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts');
	const posts = ((await res.json()) as Post[]).slice(0, 3); // Ensure we only get 3 posts.

	const headerTexts = getHeaderTexts(posts);

	return {
		posts: posts.map((post, index) => ({
			id: post.id,
			title: post.title.rendered,
			url: post.link,
			date: post.date,
			img: {
				src: post.featured_media,
				alt: ''
			},
			author: {
				name: post._embedded.author[0].name,
				url: post._embedded.author[0].link
			},
			headerText: headerTexts[index],
			footerText: 'Article'
		}))
	};
};

const getHeaderTexts = (posts: Post[]) => {
	const headerTexts: string[] = [];

	posts.forEach((post) => {
		post['_embedded']['wp:term'].forEach((termGroup) => {
			termGroup.forEach((term) => {
				if (term.taxonomy === 'group') {
					headerTexts.push(term.name);
				}
			});
		});
	});

	return headerTexts;
};
