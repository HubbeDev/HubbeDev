import { sanityClient } from '$lib/utils/sanityClient';
import { error } from '@sveltejs/kit';
import groq from 'groq';

import type { Post } from '$lib/utils/sanityClient';

export const load = async () => {
	const posts: Post[] = await sanityClient.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
	if (posts) {
		return {
			posts
		};
	}

	throw error(404, 'Not found');
};
