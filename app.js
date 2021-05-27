const express =  require('express');

//express app
const app = express();

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
	//automatic set headers and or content-type
	// res.send('<h1>Response from node server</h1>');
	res.sendFile('./views/index.html', { root: __dirname})
});

app.get('/about', (req, res) => {
	//automatic set headers and or content-type
	// res.send('<h1>Response from node server</h1>');
	res.sendFile('./views/about.html', { root: __dirname})
});

//redirects
app.get('/about-us', (req, res) => {
	res.redirect('/about');
});

//404 page
app.use((req, res) => {
	res.status(404).sendFile('./views/404.html', { root: __dirname });
})