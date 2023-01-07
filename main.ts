import {
    serve
} from 'https://deno.land/std@0.171.0/http/server.ts'

serve(() => {
    return new Response('Welcome...')
})