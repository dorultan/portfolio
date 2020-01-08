import http from 'http';
import app from './server';

const server = http.createServer(app);
let currentApp = app;
console.log(process.env)

server.listen(app.get('PORT') || 3000, function() {
	console.log('the app is on port: ' + app.get('PORT'));
})

if (module.hot) {
 module.hot.accept('./server', () => {
  server.removeListener('request', currentApp)
  server.on('request', app)
  currentApp = app
 })

 module.hot.accept('./router', () => {
 	server.removeListener('request', currentApp)
	server.on('request', app)
	currentApp = app
 })

}
