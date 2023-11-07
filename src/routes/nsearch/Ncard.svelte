<script>
	export let page_id, content
</script>

<li>
	<a href="https://es.wikipedia.org/wiki/{page_id}">
		<h1>{decodeURIComponent(page_id).replace(/_/g," ")}</h1>
	</a>
	<p>{content}...</p>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	a, h1 {
		color: #9ac3ff;
	}
	h1 {
		font-weight: 400;
		font-size: 24px;
	}
	a:visited, a:visited>h1 {
		color: #c48af9;
	}
	p:first-letter {
		text-transform: capitalize;
	}
</style>
