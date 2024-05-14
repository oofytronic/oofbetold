export default () => {
	const thoughts = {
		collection: "thoughts",
		actions: ["paginate"],
		state: "publish",
		slug: "title",
		path: "/thoughts",
		layout: "_includes/layout.js",
		type: 'page',
		meta: {
			title: 'Oofbetold | Thoughts',
			description: 'Description'
		}
	}

	return {
		pass: [
			"assets",
			"envelope",
			"functions",
			"admin",
			"_redirects",
			"robots.txt"
		],
		collect: [
			thoughts
		]
	}
}