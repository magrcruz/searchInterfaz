<script>
	export let page_id
</script>

<li>
	<a href="https://es.wikipedia.org/wiki/{page_id}">
		<h1>{decodeURIComponent(page_id)}</h1>
	</a>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		gap: 12px;
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
</style>
