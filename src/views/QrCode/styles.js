import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  h1 {
    color: var(--azul);
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
  }

  p {
    color: var(--preto);
    padding: 10px;
  }
`

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  span {
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    font-size: 18px;
    padding: 10px;
    text-align: center;
  }

  button {
    font-weight: bold;
    background: var(--amarelo);
    color: var(--preto);
    font-size: 18px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s ease-out;

    &:hover {
      background: var(--azul);
    }
  }
`
