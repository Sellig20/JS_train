import ReactDOM from 'react-dom/client'
import './index.css'


// import axios from 'axios'

import App from './App'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})


const promise = axios.get('http://localhost:3001/persons')
  promise.then(response => {
    // Traitement des données
    console.log(response)
  })
  .catch(error => {
    console.error('Erreur Axios:', error);
  });
