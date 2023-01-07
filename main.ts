import {
    serve
} from 'https://deno.land/std@0.171.0/http/server.ts'

// execute ...
serve(async () => {

    const response = await fetch('https://u5kchvov.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22tip%22%5D%20%7B%0A%20%20title%0A%7D')
    
    let content = ''

    if (response.ok) {

        const {
            result : xs
        } = await response.json() as { result : {title : string}[] }
        
        for (const x of xs) {
            content += x.title + '\n'
        }

    }

    return new Response(content)

})
