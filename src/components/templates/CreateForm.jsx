import React from "react";
import Header from "../atoms/Header";
import Form from "../molecules.jsx/Form";

export const CreateForm = () => {
  return (
    <div>
      <Header />
      <h1
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        TAMBAH DATA KARYAWAN
      </h1>
      <div style={{ padding: "10px 20px" }}>
        <Form />
      </div>
    </div>
  );
};

export default CreateForm;
