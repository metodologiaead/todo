import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 70px;
  background: var(--azul);

  border-bottom: 5px solid var(--verde);
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  width: 50%;
  height: 70px;

  img {
    width: 200px;
    height: auto;
    padding: 10px;
  }
`


export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 70px;
  padding-right: 10px;

  a, button {
    color: var(--preto);
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--amarelo);
    }
  }

  button {
      background: none;
      border: none;
      cursor: pointer;
  }

  #notification {
    transition: all 0.3s ease-in-out;

    img {
      width: 25px;
      height: auto;
    }

    span {
      background: var(--branco);
      color: var(--preto);
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .divider::after {
      content: "|";
      margin: 0 10px;
      color: var(--preto);
    }

    button {
      font-size: 16px;
    }
`