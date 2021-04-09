import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
min-height: 100vh;
margin-bottom: 80px;
`

export const FilterArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 10px;

  justify-items: center;

  margin-top: 20px;

  button {
    border: none;
    background: none;
    outline: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  a {
    text-decoration: none;
    color: var(--preto);
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid var(--preto);
  margin-bottom: 20px;

  h3 {
    color: var(--preto);
    position: relative;
    top: 11px;

    font-size: 24px;
    background: var(--branco);
    padding: 0 10px;
  }
`