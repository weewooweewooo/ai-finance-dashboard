import { useState, React } from 'react';
import axios from 'axios';

function AddTransaction() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/transactions', {
      amount: parseFloat(amount) * 100,
      category,
      date: new Date().toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Rent</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}