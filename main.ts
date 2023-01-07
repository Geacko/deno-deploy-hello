import {
    serve
} from 'https://deno.land/std@0.171.0/http/server.ts'

/** @internal */
const uri = new URL('index.html', import.meta.url)

// execute ...
serve(() => {
    
    /** @todo */
    // ...
    // ...
    // ...
    
    return Deno.open( uri ).then(x => new Response(x.readable))

})
