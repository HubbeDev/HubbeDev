import { sanityClient } from '$lib/utils/sanityClient';
import { error } from '@sveltejs/kit';
import groq from 'groq';

import type { Post } from '$lib/utils/sanityClient';

export const load = async ({ params }) => {
	async function getPost(slug: string): Promise<Post> {
		return await sanityClient.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
			slug
		});
	}

	return {
		streamed: {
			post: await getPost(params.slug)
		}
	};
};
