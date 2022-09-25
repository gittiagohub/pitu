import app from './app';
import database from './database'

database.sync({force : false});

console.log('Database is running');

app.listen(3001);
console.log('Server running at port 3001')