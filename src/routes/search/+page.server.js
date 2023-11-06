import { supabase } from "$lib/client.js"

export async function load({ url }) {
    let query = url.searchParams.get("query").toLowerCase()


    let { data, error } = await supabase
        .rpc('search_pages', {
            term_to_search: query
        })

    if (error) console.error(error)
    else console.log(data)


    return {
        time: Math.random().toFixed(2),
        pages: data
    }
}