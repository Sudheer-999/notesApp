import {NoteItemCon, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, note} = details

  return (
    <NoteItemCon>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </NoteItemCon>
  )
}

export default NoteItem
