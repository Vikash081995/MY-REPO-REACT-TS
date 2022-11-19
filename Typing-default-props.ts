type GreetProps = { age: number } & typeof defaultProps;
const defaultProps = {
  age: 21
};
const Greet = (props: GreetProps) => {
  return <div>{props.age}</div>;
};

Greet.defaultProps = defaultProps;
