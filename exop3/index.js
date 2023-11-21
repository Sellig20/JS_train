const express = require('express')
const morgan = require('morgan')
const app = express()

morgan.token('postData', (req, res) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : '';
});

const postFormat = ':method :url :status :res[content-length] - :response-time ms :postData';

app.use(morgan(postFormat, { stream: process.stdout }));

app.use(express.json())

const requestLogger = (request, responsem, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

let notes = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello Telephon!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(notes)
})

app.get('/error', (request, response) => {
    response.status(404).send('Page not found');
})

app.get('/api/info', (request, response) => {
    const date = new Date();
    const heure = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const secondes = date.getSeconds().toString().padStart(2, '0');
    
    const heureActuelle = `${heure}:${minutes}:${secondes}`;
    const infoHMS = {
        time: heureActuelle,
        message: 'Informations supplémentaires ici...',
        message: 'Phonebook has info for ' + notes.length + ' caca'
    };
    console.log(infoHMS)
    response.json(infoHMS)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)

    if (note)
    {
        response.json(note)
    }
    else
    {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const generateID = () => {
    return Math.floor(Math.random() * 1000000);
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    const newId = generateID();

    const idExists = notes.some(note => note.id === newId);

    if (idExists)
    return response.status(404).json({ error: 'Id is already in use' });

    const nameExists = notes.some(note => note.content === body.content);

    if (nameExists)
      return response.status(404).json({ error: 'Name is already in use' });

    if (!body.content) {
      return response.status(404).json({ error: 'Name is missing' });
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: newId
    }

    notes = notes.concat(note)

    response.json(note)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

