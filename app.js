const express =  require('express');

//express app
const app = express();

//set the ejs view engine to express app
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

//capture the request using middleware
app.use((req, res, next) => {
	console.log('new request incoming...');
	console.log(`host : ${req.hostname}`);
	console.log('path : ', req.path);
	console.log('method : ', req.method);
	next();
});

app.get('/', (req, res) => {
	//automatic set headers and or content-type manually with node
	// res.send('<h1>Response from node server</h1>');
	// res.sendFile('./views/index.html', { root: __dirname})

	// ejs render
	// extension name not required like .html
	// render function search index in views folder
	
	const blogs = [
		{ title: 'Mario Class', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam' },
		{ title: 'Luigi Class', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam' },
		{ title: 'Ryu Class', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam' }
	];
	res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
	//automatic set headers and or content-type manually with node
	// res.send('<h1>Response from node server</h1>');
	// res.sendFile('./views/about.html', { root: __dirname})
	res.render('about', { title: 'About'})
});

//redirects
// app.get('/about-us', (req, res) => {
// 	res.redirect('/about');
// });

app.get('/blogs/create', (req, res) => {
	res.render('create', { title: 'Create' });
});

//404 page
app.use((req, res) => {
	res.render('404', { title: '404 not found'})
})