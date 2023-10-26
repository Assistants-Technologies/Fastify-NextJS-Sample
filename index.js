const FastifyNextJS = require('./utils/fastify')
const dev = true;

(async () => {
    const [
        fastify,
        next_app
    ] = await FastifyNextJS.init_app(dev).catch(console.log)

    fastify.get('/', (request, reply) => {
        return next_app.render(request.raw, reply.raw, 'sample', {
            text: "bob"
        })
    })

    fastify.listen({ port: dev ? 3000 : 80 }).then(() => console.log("THE SERVER IS LISTENING"))
})()
