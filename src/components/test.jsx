const Test = ({ onCoucou, onReCoucou }) => {
  const auClique = () => {
    console.log("clické");
    onCoucou("red");
  };

  const encoreClique = () => {
    console.log("clické2");
    onReCoucou("green");
  };

  return (
    <div>
      <button onClick={auClique}>Click me !</button>
      <button onClick={encoreClique}>Click me encore!</button>
    </div>
  );
};

export default Test;
