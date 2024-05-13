export const config = () => {
	return {
		type: "page",
		state: "publish",
		meta: {
			"title" : "Home | Oofbetold",
			"description" : "This is my digital home for web development projects.",
			"schema": {
				"@context": "http://schema.org/",
				"@type": "WebSite",
				"url": "https://oofbetold.com",
			},
			"scripts": [""]
		},
		layout: "_includes/layout.js"
	}
}


export default ({data, context}) => {

	return `
	<main>
	<section>
		<div>
			
		</div>
	</section>
	</main>
	`;
}