import { useState, useRef } from 'react'

function App() {
  const [word, setWord] = useState('')
  const [words, setWords] = useState([])

  const handleInput = event => {
    setWord(event.target.value)
  }

  const addWord = () => {
    if (!word || word === '') {
      alert('Ingresa una palabra')
      return
    }

    const base = 'http://127.0.0.1:3000/api/'
    fetch(`${base}iecho?text=${word}`)
      .then(res => res.json())
      .then(reversed => setWords([...words, reversed.text]))
      .catch(err => {
        console.log(err.error)
      })

    setWord('')
  }

  return (
    <div className="">
      <header className="">
        <input type='text' placeholder='Insert text' value={word} onChange={handleInput} />
        <button onClick={addWord}>Send</button>
      </header>
      <div>
        {
          words && words.map(word => (
            <p>{word}</p>
          ))
        }
      </div>
    </div>
  );
}

export default App;
