import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 70px;
  background: var(--azul);

  border-top: 5px solid var(--verde);

  span {
    color: #fff;
  }

  img {
    width: 90px;
    height: auto;
    margin-left: 10px;
  }
`