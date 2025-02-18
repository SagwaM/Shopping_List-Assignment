import React, {useState} from 'react'

function NameInput() {
    const [name, setName] = useState('')
  return (
    <div>
        <input 
        type='text' 
        placeholder='Enter your name'
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        />
        <p>Annyeong: {name}</p>

    </div>
  )
}

export default NameInput