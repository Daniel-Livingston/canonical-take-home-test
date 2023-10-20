<script lang="ts">
	export let title: string,
		url: string,
		date: string,
		img: { src: string; alt?: string },
		author: { name: string; url?: string },
		headerText: string,
		footerText: string;
</script>

<div class="p-card u-no-padding">
	<p class="c-p-card__header">{headerText}</p>
	<div class="p-card__content">
		<img src={img.src} alt={img.alt ? img.alt : title} />
		<h4>
			<a href={url}>{title}</a>
		</h4>
		<p class="c-p-card__credit">
			By
			{#if author.url}
				<a href={author.url}>{author.name}</a>
			{:else}
				{author.name}
			{/if}
			on {date}
		</p>
	</div>
	<p class="c-p-card__footer p-text--small u-text--muted">{footerText}</p>
</div>

<style lang="scss">
	.p-card {
		border-radius: 2px;
		border-top: 3px solid #a87ca0;
		box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-direction: column;
		height: 100%;
		margin-bottom: 0;
	}

	.c-p-card__header {
		margin: 0;
		padding: $spv--x-large $spv--large $spv--large $spv--large;
		text-transform: uppercase;
	}

	.p-card__content {
		border-top: 1px dotted $color-mid-light;
		margin: 0 $spv--small;
		padding: $spv--large $spv--medium;
	}

	.c-p-card__credit {
		font-style: italic;
	}

	.c-p-card__footer {
		border-top: 1px dotted $color-mid-light;
		margin: auto $spv--small 0;
		padding: $spv--large $spv--small;
	}
</style>
