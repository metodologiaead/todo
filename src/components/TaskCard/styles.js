import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  width: 250px;
  height: 200px;
  box-shadow: rgb(0 0 0 / 30%) 0px 3px 6px 0px;
  border-radius: 10px;

  margin: 10px;

  transition: opacity 0.3s ease-in-out;

  cursor: pointer;

  opacity: ${props => props.done ? 0.5 : 1};

  &:hover {
    opacity: 0.5;
  }
`

export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;

  img {
    width: 70px;
    height: auto;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 24px;
  }
`

export const BottonCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  strong {
    color: var(--azul);
    font-weight: bold;
  }

  span {
    color: var(--preto);
  }
`
