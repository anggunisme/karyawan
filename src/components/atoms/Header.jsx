import React from "react";
import logo from "../../assets/polines.png";

const Header = () => {
  const headerStyles = {
    backgroundColor: "#DA70D6",
    padding: "10px",
  };

  const logoContainerStyles = {
    display: "flex",
    alignItems: "center",
  };

  const logoStyles = {
    width: "50px",
    height: "auto",
    marginRight: "10px",
    marginLeft: "10px",
  };

  const companyNameStyles = {
    margin: "0",
    fontSize: "25px",
    color: "#F5F5F5",
    fontWeight: "bold",
  };

  return (
    <header style={headerStyles}>
      <div style={logoContainerStyles}>
        <img src={logo} alt="Logo Perusahaan" style={logoStyles} />
        <h1 style={companyNameStyles}>JY GROUP</h1>
      </div>
    </header>
  );
};

export default Header;
