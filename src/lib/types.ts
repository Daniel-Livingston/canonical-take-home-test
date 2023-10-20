export interface Post {
	id: number;
	date: string;
	link: string;
	title: {
		rendered: string;
	};
	featured_media: string;
	_embedded: {
		author: {
			name: string;
			link: string;
		}[];
		'wp:term': {
			name: string;
			taxonomy: string;
		}[][];
	};
}
