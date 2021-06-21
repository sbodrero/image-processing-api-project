import express from 'express';
import path from 'path';
import routes from './routes';
import logger from './utilities/logger';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/thumbs', express.static(path.join(__dirname, 'thumbs')));
app.use('/full', express.static(path.join(__dirname, 'full')));

app.use(logger);
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

export default app;
