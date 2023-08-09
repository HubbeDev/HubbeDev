<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$components/ui/card';

	let text = 'Hello World';
</script>

<Card>
	<CardHeader>
		<CardTitle>Card Title</CardTitle>
		<CardDescription>Card Description</CardDescription>
	</CardHeader>
	<CardContent>
		<p>Card Content</p>
	</CardContent>
	<CardFooter>
		<p>Card Footer</p>
	</CardFooter>
</Card>
