import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addWord } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  const words = useSelector(state => state.words)

  const [word, setWord] = useState('')
  // const [words, setWords] = useState([])

  const handleInput = event => {
    setWord(event.target.value)
  }

  const handleSubmit = () => {
    if (!word || word === '') {
      alert('Ingresa una palabra')
      return
    }

    const base = 'http://127.0.0.1:3000/api/'
    fetch(`${base}iecho?text=${word}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(addWord(data))
      })
      .catch(err => {
        console.log(err.error)
      })

    setWord('')
  }

  return (
    <div className="">
      <header className="bg-danger p-3">
        <div className='container d-flex'>
          <div className='input-group me-3'>
            <input
              type='text'
              placeholder='Insert text'
              value={word}
              onChange={handleInput}
              className='form-control'
            />
          </div>
          <button className='btn btn-primary' onClick={handleSubmit}>Send</button>
        </div>
      </header>
      <div className='container py-4'>
        <div className='card p-3' style={{ minHeight: '400px' }}>
          <h3>Reults:</h3>
          <div className='d-flex flex-column justify-content-center w-50 mx-auto'>
            {
              words && words.map(word => (
                <p className='border p-1 rounded d-flex justify-content-between'>
                  {word.text}
                  <span className='text-muted'>Palindromo: {word.palindrome ? 'si' : 'no'}</span>
                </p>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
