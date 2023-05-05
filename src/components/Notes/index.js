import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  BgContainer,
  Head,
  InputCon,
  Input,
  TextArea,
  Empty,
  EmptyHead,
  EmptyDesc,
  EmptyImage,
  AddBtn,
  NotesItems,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const [notesList, setNotesList] = useState([])

  const onTitle = event => {
    setTitle(event.target.value)
  }

  const onNote = event => {
    setNote(event.target.value)
  }

  const onAdd = () => {
    const newNote = {title, note, id: uuidv4()}
    setNotesList(prevList => [...prevList, newNote])
    setTitle('')
    setNote('')
  }

  const renderEmptyView = () => (
    <Empty>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHead>No Notes Yet</EmptyHead>
      <EmptyDesc>Notes you add will appear here</EmptyDesc>
    </Empty>
  )

  return (
    <BgContainer>
      <Head>Notes</Head>
      <InputCon>
        <Input
          type="text"
          placeholder="Title"
          onChange={onTitle}
          value={title}
        />
        <TextArea placeholder="Take a Note..." onChange={onNote} value={note} />
        <AddBtn onClick={onAdd}>Add</AddBtn>
      </InputCon>
      <>
        {notesList.length < 1 ? (
          renderEmptyView()
        ) : (
          <NotesItems>
            {notesList.map(eachItem => (
              <NoteItem key={eachItem.id} details={eachItem} />
            ))}
          </NotesItems>
        )}
      </>
    </BgContainer>
  )
}

export default Notes
