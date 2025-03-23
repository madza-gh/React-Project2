import { useTimersContext } from "../store/timers-context";
import Input from "./Input";
import Form from "./Form";
import Button from "./button";

function AddTimer() {
  const {addTimers} = useTimersContext()

  function handleOnSave(data: unknown) {
    const extractedData = data as { name: string; duration: string };

    addTimers({name: extractedData.name, duration: +extractedData.duration})  
  }
  return (
    <div>
      <Form
        onSave={handleOnSave}
        className="bg-slate-800 flex flex-col p-8 max-w-xl rounded-md mx-auto gap-5"
      >
        <Input
          id="name"
          type="text"
          placeholder="Name"
          className="p-2 bg-slate-600 w-full outline-none rounded-md"
        />
        <Input
          id="duration"
          type="text"
          placeholder="Duration"
          className="p-2 bg-slate-600 w-full outline-none rounded-md"
        />
        <Button className="p-2 bg-slate-900 rounded-md text-slate-200">
          Add Timer
        </Button>
      </Form>
    </div>
  );
}

export default AddTimer;
