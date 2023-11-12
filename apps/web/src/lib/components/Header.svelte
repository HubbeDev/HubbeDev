<script lang="ts">
	import { Github } from 'lucide-svelte';
	let devTitle = '<DEV />';
</script>

<header class="container mx-auto max-w-3xl mb-8">
	<nav class="border-b border-muted-foreground w-full flex items-center py-4">
		<a href="/" class="text-2xl font-semibold mr-auto"
			>Hubbe
			<span class="text-primary ml-2">{devTitle}</span>
		</a>

		<a href="/about" class="text-sm font-semibold text-gray-600 hover:text-gray-800 mr-4">About</a>
		<a href="/contact" class="text-sm font-semibold text-gray-600 hover:text-gray-800">Contact</a>
		<a
			href="https://github.com/HubbeDev/HubbeDev"
			title="Github"
			class="ml-4 text-primary bg-secondary rounded-full p-2"
			target="_blank"
		>
			<Github size="24" />
		</a>
	</nav>
</header>
