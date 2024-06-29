import styled from 'styled-components';

export const NewContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 40vh;
  font-family: 'Poppins', sans-serif;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0 5%;
    gap: 1%;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 32.6%;
      border-radius: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 20vh;
      border: 1px solid #000;
      margin: 10px 0;
      padding: 0 35px;
      text-align: center;

      h2 {
        font-family: 'Poppins', sans-serif;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }

  .infoData {
    position: relative;
    left: 0;
    top: 0;
  }
`;
