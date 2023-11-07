<script>
	import { page } from "$app/stores";
	import Ncard from "./Ncard.svelte";

	export let data
	let buscando = false

	$: query = $page.url.searchParams.get("query");
	$: ({ time, pages } = data)

</script>

<svelte:head>
	<title>{query} - Busqueda</title>
</svelte:head>

<header>
	<form action="?/search" method="get">
		<a href="/">
			<h1>Súper Buscador</h1>
		</a>
		<p>
			<input type="search" name="query" id="query" value={query} required/>
			<svg
				class="placeholder"
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 -960 960 960"
				width="24"
				><path
					fill="var(--fill)"
					d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
				/></svg
			>
		</p>
	</form>
</header>
<main>
	{#if buscando}
		<h2>Buscando...</h2>
	{:else if pages.length === 0}
		<h2>Lo sentimos</h2>
		<p>Tu búsqueda no arrojó ningún resultado :&lpar;</p>
	{:else}
		<small>Cerca de {pages.length} resultados ({time} segundos)</small>
		<h2>Resultados de la búsqueda:</h2>
		<ul>
			{#each pages as result}
				<Ncard {...result} />
			{/each}
		</ul>
	{/if}
</main>

<style>
	main {
		padding: 0 32px 32px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	small{
		color: var(--text);
	}
	form > a {
		color: var(--accent);
		text-decoration: none;
	}
	form {
		display: flex;
		align-items: center;
		gap: 32px;
		padding: 26px 32px;
	}
	h1 {
		font-size: 24px;
	}
	p {
		position: relative;
	}
	input+svg {
		display: none;
	}
	input {
		background-color: var(--hover);
		border: 1px solid var(--hover);
		box-shadow: none;
		width: 500px;
		margin-left: 24px;
		padding-left: 24px;
	}
	input:hover {
		box-shadow: 0 0 4px #0000004d;
	}
	input:focus {
		box-shadow: 0 0 4px #0000004d;
		width: calc(500px + 24px);
		margin-left: 0px;
		padding-left: calc(24px + 24px);
	}
	input:focus+svg {
		display: block;
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 32px;
		max-width: 700px;
	}

	@media (max-width: 700px) {
		main {
			padding: 0 20px;
		}
		form {
			flex-direction: column;
			padding: 20px;
			gap: 16px;
		}
		p {
			width: 100%;
		}
		input, input:focus {
			width: 100%;
			margin: 0;
			padding-left: calc(24px + 24px);
		}
		input+svg {
			display: block;
		}
	}
</style>
