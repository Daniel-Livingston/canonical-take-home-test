<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from '$lib';

	export let data: PageData;
</script>

<div class="row">
	{#each data.posts as { id, ...post } (id)}
		<div class="col-4">
			<Card {...post} />
		</div>
	{/each}
</div>

<style lang="scss">
	.col-4 {
		margin-bottom: $spv--large;
	}
</style>
