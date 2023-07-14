import { useState, useEffect } from "react";

import Table from "./components/Table/Table";

import api from "./services/api";

function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns({
      nome: "Nome",
      data_nascimento: "Data de Nascimento",
      cpf: "CPF",
      endereco: "Endereço",
      status: "Status",
    });

    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await api.get("users");
      setData(response.data);
    } catch (error) {
      console.log("Erro ao buscar users", error);
    }
  }

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
