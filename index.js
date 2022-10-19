const FastifyNextJS = require('./fastify_with_next')
const dev = false;

(async ()=>{
    const fastify = await FastifyNextJS.init_app(dev).catch(console.log)

    fastify.get('/', (request, reply) => {
        return "Hello world!"
    })

    fastify.next('/sample', (app, request, reply) => {
        return app.render(request.raw, reply.raw, '/sample', { text: request.query.text || "Enter your desc in url to display it there! (?desc=Description)." })
    })

    fastify.listen({ port: dev ? 3000 : 80 }).then(()=>console.log("SERVER IS LISTENING"))
})()
