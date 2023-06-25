import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../atoms/Header";
import Table from "../atoms/Table";
import Button from "../atoms/Button";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        DATA KARYAWAN
      </h1>
      <div className="flex justify-end mr-2 mt-5">
        <Button
          width="200px"
          height="40px"
          handleClick={() => navigate("/tambah")}
          text="Tambah Data Karyawan"
        />
      </div>
      <div style={{ margin: "10px", marginTop: "30px" }}>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
