import React, { useEffect, useState, useRef } from 'react';
// import { useForm } from 'react-hook-form';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import SVG_BG from '../../assets/Iogona.gif';
import { BiArrowFromLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({});

  const formUsername = useRef();
  const formPassword = useRef();

  async function HandleSubmit(event) {
    await setData({
      username: formUsername.current.value,
      password: formPassword.current.value,
    });

    console.log(data);
    event.preventDefault();
  }

  return (
    <Container>
      <div className="left">
        <img className="logo" src={Logo} alt="Be The Hero" />
        <form onSubmit={HandleSubmit}>
          <div>
            <h2>Faça seu logon</h2>
          </div>
          <input
            type="text"
            required={true}
            ref={formUsername}
            name="username"
            placeholder="Digite seu username aqui"
          />
          <input
            type="password"
            required={true}
            ref={formPassword}
            name="password"
            placeholder="Digite sua senha aqui"
          />
          <button>Entrar</button>
          <Link to="/cadastro">
            Não tenho Cadastro
            <BiArrowFromLeft size="1.3rem" color="red" id="ArrowLeft" />
          </Link>
        </form>
      </div>
      <div className="right">
        <img src={SVG_BG} alt="" />
      </div>
    </Container>
  );
}

export default Login;
