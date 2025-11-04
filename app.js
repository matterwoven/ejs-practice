import express from 'express';
const app = express();
const PORT = 3007;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/friends", (req, res) => {
    const friends = ["Mickey", "Goofy", "Minnie", "Daisy"];
    res.render('friends', {friends});
})
app.get("/movies", (req, res) => {
    const movies = ["Mickey Two A Fate", "Goofy Goobers in Space!", "Minnie Mouse and the Mysterious Purse", "Daisy Doo and the Crimes of Who?"];
    res.render('movies', {movies});
})

app.get('/', (req, res) => {
    const person = { name: 'Donald Duck', occupation: 'plumber', favColor: 'beige' };
    res.render('home', { person });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));