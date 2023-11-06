<svelte:head>
	<title>Súper Buscador</title>
</svelte:head>

<main>
	<form action="search?/search" method="get">
		<h1>Súper Buscador</h1>
		<p>
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
			<input type="search" name="query" id="query" />
		</p>
		<a href="/">Me siento con suerte</a>
	</form>
</main>

<style>
	main {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		width: 100%;
		padding-bottom: 32px;
	}
	p {
		position: relative;
		width: 100%;
		max-width: 640px;
		min-width: calc(320px - 32px);
	}
	h1 {
		font-size: 56px;
	}
</style>
