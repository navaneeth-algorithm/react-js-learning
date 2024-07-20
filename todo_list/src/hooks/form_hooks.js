const { useContext } = require("react");
const { FormContext } = require("../context/form_context");


function useFormContext(){
  const formContext = useContext(FormContext);

  return formContext;
}

export default useFormContext;
