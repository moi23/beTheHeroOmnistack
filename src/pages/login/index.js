import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import SVG_BG from '../../assets/heroes.png';
import { BiArrowFromLeft } from 'react-icons/bi';

function Login() {
  return (
    <Container>
      <div className="left">
        <img className="logo" src={Logo} alt="Be The Hero" />
        <form action="">
          <div>
            <h2>Faça seu logon</h2>
          </div>
          <input
            type="text"
            required={true}
            placeholder="Digite seu Username aqui"
          />
          <input
            type="password"
            required={true}
            placeholder="Digite sua Senha aqui"
          />
          <button>Entrar</button>
          <a href="#">
            <BiArrowFromLeft size="1.3rem" color="red" id="ArrowLeft" /> Não
            tenho Cadastro
          </a>
        </form>
      </div>
      <div className="right">
        <img src={SVG_BG} alt="" />
      </div>
    </Container>
  );
}

export default Login;
