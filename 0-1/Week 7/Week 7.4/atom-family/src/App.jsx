
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

// eslint-disable-next-line react/prop-types
function Todo({id}) {
  const currentTodo = useRecoilValue(todosAtomFamily(id))

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  )
}

export default App
