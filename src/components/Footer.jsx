import React from "react"
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <img
            src={logo}
            alt="Logo GameVault"
            width="100"
            height="100"
            className="me-2"
          />
          <h5 className="mb-0">GameVault</h5>
        </div>

        <div className="text-center text-md-end">
          <p className="mb-1">📞 (11) 99999-9999</p>
          <p className="mb-1">✉️ contato@gamevault.com</p>
          <p className="mb-0">
            📷 <a href="https://instagram.com/gamevault" className="text-light text-decoration-none">@gamevault</a>
          </p>
        </div>
      </div>
    </footer>
  );
}