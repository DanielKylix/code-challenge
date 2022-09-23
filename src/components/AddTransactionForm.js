import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const initialState = { date: "", description: "", category: "", amount: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData);
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="inline fields">
          <input onChange={handleChange} type="date" name="date" />
          <input
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
