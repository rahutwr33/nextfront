const express = require('express');
const next = require('next');
const port = 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev});
const handle = app.getRequestHandler();
const compression=require('compression')
const shouldCompress = (req, res) => {
  // don't compress responses asking explicitly not
  if (req.headers['x-no-compression']) {
    return false
  }

  // use compression filter function
  return compression.filter(req, res)
}
app.prepare()
.then(() => {
  const server = express();
  server.use(compression({ filter: shouldCompress }))

  server.get('*', (req, res) => {
    return handle(req, res);
  });
    
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> App running on http://localhost:${port}`);
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});