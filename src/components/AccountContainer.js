import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const url = "http://localhost:8001";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(`${url}/transactions`);
      const result = await response.json();
      setData(result);
      if (search !== "") {
        handleSearch();
      }
    } catch (error) {}
  };
  const addData = (formData) => {
    fetch(`${url}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    getData();
  };

  const handleSearch = () => {
    const filtered = data.filter((trans) => {
      let description = trans.description.toLowerCase();
      let category = trans.category.toLowerCase();
      let terms = search.toLowerCase();

      return description.includes(terms) || category.includes(terms);
    });
    setData(filtered );
  };
  return (
    <div>
      <Search handleChange={handleSearchChange} search={search} />
      <AddTransactionForm addTransaction={addData} />
      <TransactionsList transactions={data}  />
    </div>
  );
}

export default AccountContainer;
