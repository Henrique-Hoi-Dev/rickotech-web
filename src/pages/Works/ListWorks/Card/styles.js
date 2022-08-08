import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .cards {
    margin: 0px 0 44px 35px;
    padding: 7px;

    border-radius: 8px;

    box-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    background: #4d4c4c;

    display: grid;
    grid-template-columns: 140px 140px;
    grid-template-rows: 70px 70px;
    justify-content: center;
    grid-template-areas:
      'area-1 area-2'
      'area-3 area-4'
      'area-5 area-5';

    .area-1 {
      grid-area: area-1;
      text-align: center;
      margin-top: 10px;
    }
    .area-2 {
      margin-top: 10px;
      grid-area: area-2;
      text-align: center;
    }
    .area-3 {
      grid-area: area-3;
      text-align: center;
    }
    .area-4 {
      grid-area: area-4;
      text-align: center;
    }
    .area-5 {
      grid-area: area-5;
      text-align: center;
      display: flex;
      justify-content: center;

      svg {
        margin: 9px 19px 9px 19px;
      }
    }

    svg {
      font-size: 2rem;
      margin-bottom: 7px;
    }

    hr {
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }
    
    .area-1, .area-2, .area-3, .area-4 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      color:  #8945de!important;

      hr {
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
      }
      
      strong {
        margin-bottom: 6px;
        font-weight: bold;
        font-size: 16px;
        color: #ffff;
      }
    }
  }
`