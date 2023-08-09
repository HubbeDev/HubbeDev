<script lang="ts">
	import PostItem from '$components/PostItem.svelte';

	export let data;
	console.log(data);
</script>

<section class="space-y-4 mb-8">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Hello! Im Hubbe.</h1>
	<p class="text-xl text-muted-foreground text-balance md:pr-12">
		Welcome to my personal blog about web design and web development! Here, I'll be sharing my
		insights and tips on how to create beautiful and functional websites.
	</p>
</section>

{#await data.streamed.posts}
	Loading...
{:then posts}
	{#each posts as post}
		<PostItem {post} />
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}
