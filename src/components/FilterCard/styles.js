import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 260px;
  height: 60px;
  background: ${props => props.actived ? '#ee6b26' : '#20295f'};

  border-radius: 5px;

  padding: 10px;

  transition: background 0.3s ease-in-out;

  cursor: pointer;

  img {
    width: 25px;
    height: auto;
  }

  span {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    align-self: flex-end;
  }

  &:hover {
    background: #ee6b26;
  }
`