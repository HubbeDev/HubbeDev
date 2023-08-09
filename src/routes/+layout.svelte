<script>
	import '../app.postcss';

	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<Header />

<div class="container mx-auto max-w-3xl px-8 pt-2 flex flex-col ">

	<slot />
</div>

<Footer />


