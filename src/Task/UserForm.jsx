import React,{useState} from 'react'

export default function UserForm() {
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
    
  return (
    <div className="card">
      <h2>User Form</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <div className="checkbox-group">
        <input 
          type="checkbox" 
          checked={agreed} 
          onChange={(e) => setAgreed(e.target.checked)} 
        />
        <label>Accept Terms</label>
      </div>
      <div className="output">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Agreed:</strong> {agreed ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}
