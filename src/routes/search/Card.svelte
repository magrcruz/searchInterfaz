<script>
	export let url, title, snippet;
</script>

<li>
	<a href={url}>
		<h1>{title}</h1>
	</a>
	<p>{snippet}</p>
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
