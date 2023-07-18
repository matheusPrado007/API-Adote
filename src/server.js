const app = require('./app');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API adtbackend está sendo executada na porta ${PORT}`);
});