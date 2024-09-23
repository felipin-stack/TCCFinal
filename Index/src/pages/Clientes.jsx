import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ClienteService from './services/ClienteService';
import Button from 'react-bootstrap/Button';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    ClienteService.getAllClientes()
      .then(response => {
        const clientes = response.data;
        setClientes(clientes);
        console.log(clientes);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Senha</th>
          <th>Cep</th>
          <th>Telefone</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map(cliente => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.senha}</td>
            <td>{cliente.cep}</td>
            <td>{cliente.telefone}</td>
            <td>
            <Button 
                  variant="danger" 
                  onClick={() => handleDelete(cliente.id)}
                >
                  Excluir
                </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Clientes;