import Container from "./Container";

type TimerProps = {
  name: string;
  duration: number;
};

function Timer({ name, duration }: TimerProps) {
  return (
    <Container
      ComponentType={"div"}
      className="p-3 my-3 mx-auto max-w-fit  bg-slate-800 text-slate-300 rounded-md text-center"
    >
      <p>{name}</p>
      <p>{duration}</p>
    </Container>
  );
}

export default Timer;
