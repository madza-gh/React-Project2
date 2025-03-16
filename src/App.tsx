import Button from "./components/button"
import Form from "./components/Form"
import Input from "./components/Input"


function App(){

  function handleOnSave(data:unknown){
    const extractedData = data as {title:string , price:string}

    console.log(extractedData)
  }
  return(
      <div>
        <Form onSave={handleOnSave}>
          <Input id="title" type="text" placeholder="Title" />
          <Input id="price" type="text" placeholder="Price" />
          <Button>Add Product</Button>
        </Form>
      </div>
  )
}

export default App