import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
`
export const Head = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #4c63b6;
  font-family: Bree Serif;

  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`
export const InputCon = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 80%;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  height: 30px;
  margin-bottom: 30px;
  outline: none;
  border-width: 0;
  padding: 0px 10px;
  font-weight: 600;
`
export const TextArea = styled.textarea`
  height: 100px;
  margin-bottom: 30px;
  outline: none;
  border-width: 0;
  padding: 0px 10px;
  font-weight: 500;
`
export const AddBtn = styled.button`
  height: 34px;
  border-radius: 2px;
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  border-width: 0;
  font-size: 12px;
  width: 60px;
`
export const NotesItems = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  font-family: Roboto;
`
export const EmptyHead = styled.h1`
  font-size: 24px;
  color: #475569;
`
export const EmptyDesc = styled.p`
  font-size: 15px;
  color: #475569;
  margin: 0;
  padding: 0;
`
export const EmptyImage = styled.img`
  width: 130px;
`
