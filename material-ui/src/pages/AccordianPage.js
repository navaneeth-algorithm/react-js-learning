import Accordian from '../components/Accordian';

const AccordianPage = () => {
  const accordionItems = [
    {
      id: 'aad',
      label: 'What is the path for Python script?',
      content: 'The path for a Python script is the location on your file system where the script file is stored. It typically ends with a .py extension.',
    },
    {
      id: 'bcd',
      label: 'How do you install a Python package?',
      content: 'You can install a Python package using the pip command followed by the package name, e.g., pip install package_name. Ensure you have internet access and necessary permissions.',
    },
    {
      id: 'cde',
      label: 'What is a virtual environment in Python?',
      content: 'A virtual environment in Python is an isolated environment that allows you to manage dependencies for different projects separately. It helps avoid conflicts between package versions.',
    },
    {
      id: 'def',
      label: 'How do you create a function in Python?',
      content: 'You create a function in Python using the def keyword followed by the function name and parentheses. Inside the function, you write the code that defines its behavior.',
    },
    {
      id: 'efg',
      label: 'What is a Python dictionary?',
      content: 'A Python dictionary is a collection of key-value pairs that allows you to store and retrieve data efficiently. Keys must be unique and immutable, while values can be of any type.',
    },
    {
      id: 'fgh',
      label: 'How do you handle exceptions in Python?',
      content: 'You handle exceptions in Python using the try-except block. This allows you to catch and manage errors gracefully without stopping the execution of your program.',
    },
  ];

  return (
    <div>
      <Accordian items={accordionItems} />
    </div>
  )
}

export default AccordianPage
