import useFormContext from "../hooks/form_hooks";

export const Form = () => {
  // Form for ToDOlist Add or Edit
 const {title,content,status,formData,
  onTitleChange,onStatusChange,
  onContentChange,
  onSubmitFormData,onUpdateFormData} = useFormContext();

  const formType = formData==null?'Submit':'Update';

  const onTitleChangeHandler = (event) => {
    onTitleChange(event.target.value);
  }

  const onContentChangeHAndler = (event) => {
    onContentChange(event.target.value);
  }

  const onStatusChangeHandler = (event)=>{
    onStatusChange(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(formType==='Submit'){
      onSubmitFormData();
    }
    else{
      onUpdateFormData();
    }
  }



  return (
    <form className="p-6 max-w-md bg-white rounded-xl shadow-md space-y-4 border mx-auto" onSubmit={onSubmit}>
      <div className="text-lg font-semibold">
        TODO LIST FORM
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          value={title}
          onChange={onTitleChangeHandler}
          placeholder="Title"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={onContentChangeHAndler}
          cols={10}
          rows={10}
          placeholder="Content"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-700">Status</label>
        <select value={status} onChange={onStatusChangeHandler} className="pt-2 pb-2 w-full border-gray-300 rounded-md shadow focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value='start'>Start</option>
            <option value='progress'>Progress</option>
            <option value='done'>Done</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {formType}
      </button>
    </form>
  );
}

export default Form;
