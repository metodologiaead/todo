import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
`

export const FilterArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 10px;

  justify-items: center;

  margin-top: 20px;

  button {
    border: none;
    background: none;
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
    color: #000;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #20295f;
  margin-bottom: 20px;

  h3 {
    color: #20295f;
    position: relative;
    top: 11px;

    font-size: 24px;
    background: #fff;
    padding: 0 10px;
  }
`