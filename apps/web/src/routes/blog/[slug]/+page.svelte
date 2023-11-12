<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	export let data;
</script>

{#await data.streamed.post}
	Loading...
{:then post}
	<article>
		<!-- 	{#if post.mainImage}
			<img
				class="post__cover"
				src={urlFor(post.mainImage).url()}
				alt="Cover image for {post.title}"
			/>
		{:else}
			<div class="post__cover--none" />
		{/if} -->

		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 text-center">
			{post.title}
		</h1>

		<!-- 	<p class="post__date">
				{formatDate(post._createdAt)}
			</p> -->
		<div class="leading-7 [&:not(p:first-child)]:mt-6">
			<PortableText value={post.body} />
		</div>
	</article>
{:catch error}
	<p>{error.message}</p>
{/await}
