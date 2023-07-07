import "./Header.css";

import React, { useState } from "react";

function Header() {
  return (
    <header className="principio">
      <div>
        <div className="inicio">
          <img className="perfil" src="public/fotodeperfil.jpg" />
          <a className="yi" href="#">
          Sitio web de la cartera del fotógrafo. Proyecto de estudio.
          </a>
        </div>

        <div className="ji">
          <a className="por" href="#">
            Reshat Aliyev
          </a>
          <a className="pori" href="#">
            Seguir
          </a>
        </div>
      </div>
      
      <div className="barra">
      
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent container">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Maxi Rivas
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#Hacerca de">
                    Hacerca de
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Mejores Obras">
                    Mejores Obras
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Servicio">
                    Servicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Premios">
                    Premios
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="#Video">
                    Video
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#Contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
