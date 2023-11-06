export async function load({ url }) {
    let query = url.searchParams.get("query")

    return {
        time: Math.random().toFixed(2)
    }
}