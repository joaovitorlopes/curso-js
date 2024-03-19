import app from './app';

const port = 3002;
app.listen(port, () => {
  console.log();
  console.log(`Listening in the port ${port}`);
  console.log(`CTRL + Click in http://localhost:${port}`);
});
