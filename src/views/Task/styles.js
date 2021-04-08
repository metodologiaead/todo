import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const Form = styled.div`
  width: 50%;

  margin-bottom: 90px;
`
export const TypeIcons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .inative {
    opacity: 0.5;
  }

  button {
    border: none;
    background: none;
    outline: none;
  }
  
  img {
    width: 50px;
    height: auto;
    margin: 10px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 20px 0;

  span {
    color: #707070;
    margin-bottom: 5px;
  }

  input {
    font-size: 16px;
    padding: 15px 15px 15px 0;
    border: none;
    border-bottom: 1px solid #ee6b26;
  }
`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 20px 0;

  span {
    color: #707070;
    margin-bottom: 5px;
  }

  textarea {
    font-size: 16px;
    border: 1px solid #ee6b26;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-weight: bold;
    color: #20295f;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: #ee6b26;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Save = styled.div`
  width: 100%;
  margin-top: 20px;

  button {
    width: 100%;
    background: #ee6b26;
    border: none;
    color: #fff;
    font-weight: bold;
    padding: 20px;
    border-radius: 30px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    &:hover{ 
      opacity: 0.7;
    }
  }
`