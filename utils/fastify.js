const Fastify = require('fastify')
const Next = require('next')
const path = require('path')

const fastifySession = require("@fastify/session")
const fastifyFormbody = require("@fastify/formbody")
const fastifyStatic = require("@fastify/static")
const fastifyCookie = require("@fastify/cookie")

const init_app = async (dev) => {
    const fastify = Fastify({
        logger: dev
    })
    const port = 3000
    const hostname = "0.0.0.0"
    const next_app = Next({
        dev,
        port,
        hostname,
        quiet: false
    })

    const handle = next_app.getRequestHandler()
    await next_app.prepare()

    fastify.get("/_next/*", (req, reply) => {
        return handle(req.raw, reply.raw).then(() => {
            reply.hijack()
        })
    })

    // set X-Robots-Tag
    // fastify.addHook("onSend", (req, reply, payload, next) => {
    //     reply.header("X-Robots-Tag", "noindex")
    //     next()
    // })

    fastify
        .register(fastifyFormbody)
        .register(fastifyCookie)
        .register(fastifyStatic, {
            root: path.resolve(__dirname, "..", "..", "public")
        })
        .register(fastifySession, {
            secret: "bReAtHtAkEbIgMeLoN32cHadfvg3245sdfaasdaRaCtErS",
            expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
            cookie: {
                maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week in milliseconds
            },
            saveUninitialized: false,
        })

    console.log(fastify)

    return [
        fastify,
        next_app
    ]
}

module.exports = {
    init_app,
}
