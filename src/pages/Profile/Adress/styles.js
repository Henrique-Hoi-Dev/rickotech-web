import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  width: 500px;

  h2 {
    padding: 0.5rem;
    font-weight: bold;
    margin-top: 60px;

    color: #9c98a6;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      background: rgba(0, 0, 0, 0.1);
      padding: 0 15px;
      font: 1rem Archivo;
      border-radius: 0.5rem;
      height: 2.2rem;
      padding: 0 1rem;
      margin: 0 0 1rem;
      border: 2px solid #8945de;
      font-weight: bold;
      color: #9c98a6;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    .adresses {
      width: 200px;
      margin-left: 5px;
      height: 44px;
      background: #8945de;
      font-weight: bold;
      margin-bottom: 1rem;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#333')};
          transform: scale(1.1);
          transition: all 0.5s;
        }
      }
    
      select {
        font: 1rem Archivo;
        border-radius: 0.5rem;
        height: 2.2rem;
        padding: 0 1rem;
        margin: 0 0 1rem;
        border: 2px solid #8945de;
        font-weight: bold;
        color: #9c98a6;
        background: rgba(0, 0, 0, 0.1);

        ::-webkit-scrollbar {
          width: 1px;
          height: 10px;
        }
      }
   }

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;
