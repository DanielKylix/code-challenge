import React from "react";
const url = "http://localhost:8001";

function Transaction({ date, description, category, amount, id }) {
  const onDelete = (id) => {
    fetch(`${url}/transactions/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => console.log("transaction deleted"))
      .then(() => window.location.reload());
  };
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button
          style={{ backgroundColor: "red", border: "none" }}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
