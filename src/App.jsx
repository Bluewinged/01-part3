const App = (props) => {
  const { counter } = props;
  return <div>{counter}</div>;
};

const Display = (props) => {
  return <div>{props.counter}</div>;
};

export default App;
