<script lang="ts">
	import { Card } from '$lib';

	const data = {
		title: 'The power of installed-base snap metrics',
		url: '#',
		date: '27 November 2018',
		img: {
			src: 'https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,e_sharpen,c_fill,w_555,h_311/https://ubuntu.com/wp-content/uploads/7d45/Multicloud-Blog.png',
			alt: 'A picture of a cloud'
		},
		author: {
			name: 'cprov',
			url: '#'
		},
		headerText: 'Cloud and Server',
		footerText: 'Article'
	};

	const cards = [1, 2, 3];
</script>

<div class="row">
	{#each cards as card (card)}
		<div class="col-4">
			<Card {...data} />
		</div>
	{/each}
</div>
