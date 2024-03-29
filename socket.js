let io

module.exports = {
  init: httpServer => {
    io = require('socket.io')(httpServer, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
      }
    })
    return io
  },
  getIO: () => {
    if (!io) {
      throw new Error('socket.io not initialized')
    }
    return io
  }
}