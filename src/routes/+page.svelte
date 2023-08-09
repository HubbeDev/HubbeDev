<script lang="ts">
	import PostItem from '$components/PostItem.svelte';

	export let data;
	console.log(data);
</script>

{#if data.posts.length}
	{#each data.posts as post}
		<PostItem {post} />
	{/each}
{/if}
