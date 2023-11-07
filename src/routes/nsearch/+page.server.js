import { supabase } from "$lib/client.js"

export async function load({ url }) {
    let query = url.searchParams.get("query").toLowerCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,"");

    // Iniciar el cronómetro
    const startTime = performance.now();

    let { data, error } = await supabase
    .rpc('new_search_pages', {
        term_to_search: query
    })

    // Detener el cronómetro
    const endTime = performance.now();

    // Calcular el tiempo total en segundos
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

    if (error) console.error(error)
    else console.log(data)

    return {
        time: timeTaken, // tiempo en segundos
        pages: data
    }
}