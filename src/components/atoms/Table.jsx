import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Table = () => {
  const tableStyles = {
    width: "100%",
    height: "100%",
    borderCollapse: "collapse",
  };

  const thStyles = {
    backgroundColor: "#f2f2f2",
    padding: "8px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  };

  const tdStyles = {
    padding: "8px",
    borderBottom: "1px solid #ddd",
  };

  const data = [
    {
      id: 1,
      no: 1,
      nama: "John Doe",
      gender: "L",
      alamat: "Jl. Jendral Sudirman No. 123",
      email: "johndoe@example.com",
      telp: "08123456789",
      departemen: "IT",
      thMasuk: 2020,
      foto: "https://example.com/foto.jpg",
    },
  ];

  const handleEdit = (id) => {};

  const handleDelete = (id) => {};

  return (
    <table style={tableStyles}>
      <thead>
        <tr>
          <th style={thStyles}>No</th>
          <th style={thStyles}>Nama</th>
          <th style={thStyles}>L/P</th>
          <th style={thStyles}>Alamat</th>
          <th style={thStyles}>Email</th>
          <th style={thStyles}>No.Telp</th>
          <th style={thStyles}>Departemen</th>
          <th style={thStyles}>Th Masuk</th>
          <th style={thStyles}>Foto</th>
          <th style={thStyles}>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={tdStyles}>{item.no}</td>
            <td style={tdStyles}>{item.nama}</td>
            <td style={tdStyles}>{item.gender}</td>
            <td style={tdStyles}>{item.alamat}</td>
            <td style={tdStyles}>{item.email}</td>
            <td style={tdStyles}>{item.telp}</td>
            <td style={tdStyles}>{item.departemen}</td>
            <td style={tdStyles}>{item.thMasuk}</td>
            <td style={tdStyles}>
              <img
                src={item.foto}
                alt="Foto"
                style={{ width: "50px", height: "auto" }}
              />
            </td>
            <td style={tdStyles}>
              <button onClick={() => handleEdit(item.id)}>
                <FiEdit color="blue" />
              </button>
              <button onClick={() => handleDelete(item.id)}>
                <FiTrash2 color="red" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
