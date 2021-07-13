let fastify = require('fastify')({
  logger: true
})

const app = fastify;

app.get('/', async (request : string, reply : string) => {
  return 'working'
})

app.listen(3000, (err : string, address : string) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})