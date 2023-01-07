import {
    serve
} from 'https://deno.land/std@0.171.0/http/server.ts'

const content = Deno.readFileSync(new URL('index.html', import.meta.url))

// execute ...
serve(() => {
    
    /** @todo */
    // ...
    // ...
    // ...
    
    return new Response(content)

})
