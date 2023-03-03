import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit('cars');
  };
  const handleChange = (event) => {
    //console.log(event.target.value);
    setTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
}
