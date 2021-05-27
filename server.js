const http =  require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
	// if(req.url === '/'){
	// 	res.setHeader('Content-type', 'text/plain');
	// 	res.write('Home');
	// 	res.end();
	// } else if (req.url === '/about') {
	// 	res.setHeader('Content-type', 'text/plain');
	// 	res.write('About');
	// 	res.end();
	// } else {
	// 	res.setHeader('Content-type', 'text/plain');
	// 	res.write('Redirecting...');
	// 	res.end();
	// }
	res.setHeader('Content-type', 'text/html');

	let path = './views/';
	switch(req.url){
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			res.statusCode = 200;
			break;
		case '/about-me':
			res.setHeader('Location', '/about')
			res.statusCode = 301;
			res.end();
			break;
		default:
			path += '404.html'
			res.statusCode = 404;
			break;
	}
	
	fs.readFile(path, (err, data)=> {
		if (err) {
			console.log(err);
			res.end();
		}
		// res.write(data);
		res.end(data);
	})
});

server.listen(3000, 'localhost', ()=> {
console.log('server is running')
});