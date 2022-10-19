const Fastify = require('fastify')
const path = require('path')

const init_app = async (dev) => {
    const fastify = Fastify({ logger: dev })

    await fastify.register(require('@fastify/nextjs'), {
        dev,
        dir: path.join(__dirname, './next_files')
    })

    return fastify
}

module.exports = {
    init_app,
}
