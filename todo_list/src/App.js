
import React from 'react'
import Form from './components/Form'
import Panel from './components/Panel'
import useFormContext from './hooks/form_hooks'

const App = () => {

  const {todoList} = useFormContext();
  return (
    <div className='container'>
      <div>
        <Form />
      </div>

      <div className='grid grid-cols-3 p-3 gap-3'>
        <Panel title='Start' items={todoList['start']} />
        <Panel title='Progress' items={todoList['progress']} />
        <Panel title='Done' items={todoList['done']} />
      </div>


    </div>

  )
}

export default App
