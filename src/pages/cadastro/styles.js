import styled from 'styled-components';

export const Container = styled.div`
  justify-content: space-evenly;
  display: flex;
  background: #f0eff6;
  height: 100vh;
  width: 100vw;

  .left {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    margin-left: 20%;
    .logo {
      margin-bottom: 10%;
    }

    form {
      flex-direction: column;
      display: flex;

      a {
        text-decoration: none;
        align-items: center;
        font-weight: bolder;
        list-style: none;
        margin-top: 4%;
        display: flex;
        color: black;

        #ArrowLeft {
          margin-right: 2%;
        }
      }

      input,
      button {
        padding: 5%;
      }

      input {
        border: solid 1px #eae9f0;
        border-radius: 4px;
        background: white;
        margin-top: 10px;
        outline: none;
        width: 200px;
      }

      button {
        border: solid 1px #fc1535;
        background: #fc1535;
        font-weight: bolder;
        border-radius: 4px;
        margin-top: 10px;
        transition: 0.9s;
        cursor: pointer;
        outline: none;
        width: 225px;
        color: white;

        &:hover {
          border: solid 1px #fc1535;
          background: #b40019;
          color: white;
        }
      }
    }
  }

  .right {
    justify-content: center;
    align-items: center;
    display: flex;

    img {
      height: auto;
      width: 40vw;
    }
  }
`;
