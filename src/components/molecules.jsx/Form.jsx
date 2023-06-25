import React, { useState } from "react";
import Image from "./ImageSelect";
import Button from "../atoms/Button";

const Form = () => {
  const [nama, setNama] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setNama("");
    setJenisKelamin("");
    setAlamat("");
    setEmail("");
    setNomorTelepon("");
    setDepartemen("");
    setTahunMasuk("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div>
            <label
              style={{
                display: "block",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              Nama
            </label>
            <input
              type="text"
              value={nama}
              style={{
                display: "block",
                backgroundColor: "rgb(209, 213, 219)",
                border: "0.2px solid rgb(156, 163, 175)",
                borderRadius: "2px",
                padding: "0.1rem",
                color: "black",
                fontSize: "1rem",
                marginBottom: "5px",
                width: "500px",
              }}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              Jenis Kelamin
            </label>
            <select
              value={jenisKelamin}
              style={{
                backgroundColor: "rgb(209 213 219)",
                border: "0.2px rgb(156 163 175)",
                borderRadius: "2px",
                padding: "0.1rem",
                fontSize: "1rem",
                marginRight: "5px",
                color: "black",
                fontWeight: "normal",
                marginBottom: "5px",
                width: "500px",
              }}
              onChange={(e) => setJenisKelamin(e.target.value)}
              required
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div>
            <label
              style={{
                display: "block",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              Alamat
            </label>
            <input
              value={alamat}
              style={{
                display: "block",
                backgroundColor: "rgb(209 213 219)",
                border: "0.2px rgb(156 163 175)",
                borderRadius: "2px",
                padding: "0.1rem",
                color: "black",
                fontSize: "1rem",
                marginBottom: "5px",
                width: "500px",
              }}
              onChange={(e) => setAlamat(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label
              style={{
                display: "block",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              style={{
                display: "block",
                backgroundColor: "rgb(209 213 219)",
                border: "0.2px rgb(156 163 175)",
                borderRadius: "2px",
                padding: "0.1rem",
                color: "black",
                fontSize: "1rem",
                marginBottom: "5px",
                width: "500px",
              }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              Nomor Telepon
            </label>
            <input
              type="tel"
              value={nomorTelepon}
              style={{
                display: "block",
                backgroundColor: "rgb(209 213 219)",
                border: "0.2px rgb(156 163 175)",
                borderRadius: "2px",
                padding: "0.1rem",
                color: "black",
                fontSize: "1rem",
                marginBottom: "5px",
                width: "500px",
              }}
              onChange={(e) => setNomorTelepon(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              Departemen
            </label>
            <select
              value={departemen}
              style={{
                backgroundColor: "rgb(209 213 219)",
                border: "0.2px rgb(156 163 175)",
                borderRadius: "2px",
                padding: "0.1rem",
                fontSize: "1rem",
                marginRight: "5px",
                color: "black",
                fontWeight: "normal",
                marginBottom: "5px",
                width: "500px",
              }}
              onChange={(e) => setDepartemen(e.target.value)}
              required
            >
              <option value="">Pilih Departemen</option>
              {/* Daftar pilihan departemen */}
            </select>
          </div>
          <div>
            <label
              style={{
                display: "block",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              Tahun Masuk
            </label>
            <input
              type="text"
              value={tahunMasuk}
              style={{
                display: "block",
                backgroundColor: "rgb(209 213 219)",
                border: "0.2px rgb(156 163 175)",
                borderRadius: "2px",
                padding: "0.1rem",
                color: "black",
                fontSize: "1rem",
                marginBottom: "5px",
                width: "500px",
              }}
              onChange={(e) => setTahunMasuk(e.target.value)}
              required
            />
          </div>
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <label
            style={{
              display: "block",
              color: "black",
              fontWeight: "bold",
              fontSize: "1rem",
              marginBottom: "5px",
            }}
          >
            Masukkan Foto
          </label>
          <Image />
        </div>
      </div>
      <div
        style={{
          justifyContent: "flex-center",
          alignItems: "flex-end",
        }}
      >
        <Button width="100px" height="40px" text="Submit" />
      </div>
    </form>
  );
};

export default Form;
