<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$components/ui/card';

	import type { Post } from '$lib/utils/sanityClient';

	export let post: Post;
</script>

{#if post}
	<article>
		<Card>
			<a href="blog/{post.slug.current}" title="Read full post">
				<CardHeader>
					{#if post.title}
						<CardTitle class="text-2xl">{post.title}</CardTitle>
					{/if}

					<!-- {#if post._createdAt}
					<CardDescription>{post._createdAt}</CardDescription>
				{/if} -->
				</CardHeader>
				<CardContent>
					{#if post.mainImage}
						<img loading="lazy" src={post.mainImage.url} alt={post.mainImage.title} />
					{/if}
					{#if post.excerpt}
						<p class="leading-7 [&:not(:first-child)]:mt-6">{post.excerpt}</p>
					{/if}
				</CardContent>
			</a>
		</Card>
	</article>
{/if}
