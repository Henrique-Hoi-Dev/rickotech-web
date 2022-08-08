import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    h4 {
      margin-left: 10px;
    }

    img {
      height: 100px;
      width: 150px;
      border-radius: 10%;
      border: 2px solid #8945de;
      background: #fff;
    }

    input {
      display: none;
    }
  }

  @media (max-width: 700px) {
    label {
      display: flex;
      flex-direction: column;
      align-items: center;      

      h4 {
        margin-top: 10px;
      }
    }
  }
`;
