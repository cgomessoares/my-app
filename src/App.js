import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <img src="images/logo_loja.png" className="logo_loja" alt="logo" />
            </div>
            
            <section className="collapse navbar-collapse" id="navbarMainToggler">
              <div className="navbar-nav ml-auto pr-3">
                <a className="nav-item nav-link mt-md-3" href="#">Novidades</a>
                <a className="nav-item nav-link mt-md-3" href="#">Coleção</a>
                <a className="nav-item nav-link mt-md-3 mb-3 md-md-0" href="#">Joias</a>
                <a className="nav-item nav-link mt-md-3" href="#">Sale</a>
              </div>
                <div className="banner">
                  <img src="images/home.png" className="home" alt="logo" />
                </div>
                <div className="banner_2">
                  <img src="images/banner_img.png" className="banner_img" alt="logo" />
                </div>
                <div className="banner_3">
                  <img src="images/banner_3.png" className="banner_img3" alt="logo" />
                </div>
              <form className="form-inline">
                <div className="input-group">
                  
                  
                </div>
              </form>
            </section> 

            <section className="footer">
              <div className="newsllater">
                <div className="green">
                <a className="text">NEWSLETTER</a> <br></br>
                <a className="text2">Cadastre-se para receber nossas novidades e promoções:</a>
                </div>
              </div>
              <div className="footer_">
                <a className="footer_item" href="#">A Marca</a>
                <a className="footer_item" href="#">Minha Conta</a>
                <a className="footer_item" href="#">Politica</a>
                <a className="footer_item" href="#">Formas de Pagamento</a>
                <a className="footer_item" href="#">Newsllater</a>
              </div>
            </section>

          </nav>
  );
}

export default App;
