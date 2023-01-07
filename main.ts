import {
    serve
} from 'https://deno.land/std@0.171.0/http/server.ts'

/** @internal */
const uri 
    = new URL( 'index.html' , import.meta.url )

// execute ...
serve(async () => {
    
    const content 
        = await Deno.open(uri)

    /** @todo */
    // ...
    // ...
    // ...
    
    return new Response( content.readable )

})
