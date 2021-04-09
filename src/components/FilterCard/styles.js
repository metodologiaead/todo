import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 220px;
  height: 60px;
  background: ${props => props.actived ? 'var(--amarelo)' : 'var(--verde)'};

  border-radius: 5px;

  padding: 10px;

  transition: background 0.3s ease-in-out;

  cursor: pointer;

  img {
    width: 25px;
    height: auto;
    filter: invert(70%)
  }

  span {
    color: var(--preto);
    font-size: 18px;
    font-weight: bold;
    align-self: flex-end;
  }

  &:hover {
    background: var(--amarelo);
  }
`