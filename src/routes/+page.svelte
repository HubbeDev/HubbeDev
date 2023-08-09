<script lang="ts">
    	export let data;
        import PostItem from '$components/PostItem.svelte';
</script>

{#if data.posts.length}
    {#each data.posts as post}
        <PostItem/>
        <a href="blog/{post.slug.current}">{post.title}</a>
    {/each}
{/if}
