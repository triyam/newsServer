const newsRoute = require('./newsRoute')
module.exports = app => {
  app.use('/newsRoute', newsRoute)
}