import React, {useState} from 'react'

function Profile() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(10)
  return (
    <div>
        <input 
        type='text' 
        placeholder='Enter your name'
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        />
        <p>Annyeong: {name}</p>
        <input
        type='number'
        placeholder='Enter your age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
        />
        <p>Age: {age}</p>

    </div>
  )
}

export default Profile