import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup'
 
// styles
import styles from './Signup.module.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }
  return <form onSubmit={handleSubmit} className={styles['signup-form']}> 
    <h2>Sign Up</h2>
    <label>
      <span>email:</span>
      <input type='email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
    </label>
    <label>
      <span>display name:</span>
      <input type='displayName' onChange={(e) => setDisplayName(e.target.value)} value={displayName}></input>
    </label>
    <label>
      <span>password:</span>
      <input type='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
    </label>
    {!isPending && <button className='btn'>Sign Up</button>}
    { isPending && <button className='btn' disabled>Loading...</button> }
    { error && <p>{error}</p> }
  </form>;
}
