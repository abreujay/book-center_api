const express = require('express');
const cors = require('cors');
const books = require('./data/books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Livros');
});

app.get('/api/books', (req, res) => {
    try {
        res.json(books);
    } catch (error) {
        console.error('Ocorreu um erro ao listar livros:', error);
        res.status(500).json({ message: 'Ocorreu um erro ao listar livros.' });
    }
});

app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Livro não encontrado.' });
    }
});

app.post('/api/books', (req, res) => {
    const { titulo, autor, ano } = req.body;

    if (!titulo || !autor || !ano) {
        return res.status(400).json({ message: 'Todos os campos são necessários para inclusão do livro.' });
    }

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        titulo,
        autor,
        ano
    };

    try {
        books.push(newBook);
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Ocorreu um erro ao adicionar o livro:', error);
        res.status(500).json({ message: 'Ocorreu um erro ao adicionar o livro.' });
    }
});

app.patch('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { titulo, autor, ano } = req.body;

    const index = books.findIndex(b => b.id === id);

    if (index !== -1) {
        books[index] = {
            ...books[index],
            titulo: titulo || books[index].titulo,
            autor: autor || books[index].autor,
            ano: ano || books[index].ano
        };

        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Livro não encontrado' });
    }
});

app.delete('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = books.findIndex(b => b.id === id);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.json({ message: 'Livro removido com sucesso.', deletedBook: deletedBook[0] });
    } else {
        res.status(404).json({ message: 'Livro não encontrado.' });
    }
});

app.listen(PORT, () => {
    console.log('Servidor rodando em:', PORT);
});
