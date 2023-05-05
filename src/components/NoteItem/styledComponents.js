import styled from 'styled-components'

export const NoteItemCon = styled.li`
  border: 1px solid #aab8c8;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  margin-right: 15px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 18%;
  }
`
export const Title = styled.h1`
  font-size: 20px;
  color: #1e293b;
`
export const Note = styled.p`
  font-size: 17px;
  color: #334155;
`
