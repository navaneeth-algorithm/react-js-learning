const { createContext, useState } = require("react");

const FormContext = createContext();

const FormContextProvider = ({children})=>{

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [status,setStatus] = useState('start');
  const [formData,setFormData] = useState(null);
  const [todoList,setTodoList] = useState({'start':[],'progress':[],'done':[]})

  const onTitleChange = (title)=>{
    setTitle(title);
  }

  const onContentChange = (content)=>{
    setContent(content);
  }

  const onStatusChange = (status)=>{
    setStatus(status);
  }

  const onSubmitFormData = ()=>{

    //update the form data
    const createdDate = new Date().toLocaleString();
    const updatedDate = createdDate;
    const result = {id:Math.round(Math.random()*9999),  created_date: new Date().toLocaleString(),updated_date:updatedDate,title,content,status};
    //setFormData(result);

    //update the todo list
    const updatedTodoList = { ...todoList };
    updatedTodoList[status].push(result);
    setTodoList(updatedTodoList);
    onClearFormData();
    console.log('Added the task: ', result);
  }

  const onUpdateFormData = () => {
    console.log('Updating the selected form', formData);
    const updatedDate = new Date().toLocaleString();

    // Update the todo list
    const updatedTodoList = { ...todoList };

    // Remove the item from the old status array
    updatedTodoList[formData.status] = updatedTodoList[formData.status].filter((item) => item.id !== formData.id);

    // Add the updated item to the new status array
    const updatedItem = { ...formData, title, content, status,updated_date:updatedDate };
    updatedTodoList[status].push(updatedItem);

    setTodoList(updatedTodoList);
    onClearFormData();
  };


  const onDeleteFormData = (selectedItem)=>{
  // Update the todo list
  const updatedTodoList = { ...todoList };

  // Remove the item from the status array
  updatedTodoList[selectedItem.status] = updatedTodoList[selectedItem.status].filter((item) => item.id !== selectedItem.id);
  setTodoList(updatedTodoList);

  onClearFormData();

  }


  const onClearFormData = ()=>{
    setTitle('');
    setContent('');
    setStatus('start');
    setFormData(null);
  }

  const onSetFormData = (item)=>{
    //set form data
    setTitle(item.title);
    setContent(item.content);
    setStatus(item.status);
    setFormData(item);
  }

  const valuesToShare = {
    title,content,
    status,
    formData,
    todoList,
    onTitleChange,
    onStatusChange,
    onContentChange,
    onSubmitFormData,
    onClearFormData,
    onSetFormData,
    onUpdateFormData,
    onDeleteFormData
  };

  return (
    <FormContext.Provider value={valuesToShare}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;
export {FormContext};
