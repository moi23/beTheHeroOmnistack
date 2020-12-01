import styled from 'styled-components';

export const Container = styled.div`
  background: #f0eff6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;

  .left {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .logo {
      margin-bottom: 10%;
    }

    form {
      display: flex;
      flex-direction: column;

      a {
        display: flex;
        align-items: center;
        list-style: none;
        text-decoration: none;
        margin-top: 4%;
        color: black;
        font-weight: bolder;

        #ArrowLeft {
          margin-right: 2%;
        }
      }

      input,
      button {
        padding: 5%;
      }

      input {
        width: 200px;
        border: solid 1px #eae9f0;
        border-radius: 4px;
        background: white;
        outline: none;
        margin-top: 10px;
      }

      button {
        color: white;
        width: 225px;
        border: solid 1px #fc1535;
        border-radius: 4px;
        background: #fc1535;
        outline: none;
        margin-top: 10px;
        cursor: pointer;
        transition: 0.9s;

        &:hover {
          border: solid 1px #fc1535;

          background: #b40019;

          color: white;
        }
      }
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      width: 40vw;
    }
  }
`;
