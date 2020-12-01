import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import SVG_BG from '../../assets/Iogona.gif';
import { BiArrowFromLeft } from 'react-icons/bi';

function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <div className="left">
        <img className="logo" src={Logo} alt="Be The Hero" />
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Faça seu logon</h2>
          </div>
          <input
            type="text"
            required={true}
            ref={register}
            name="username"
            placeholder="Digite seu username aqui"
          />
          <input
            type="password"
            required={true}
            ref={register}
            name="password"
            placeholder="Digite sua senha aqui"
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
