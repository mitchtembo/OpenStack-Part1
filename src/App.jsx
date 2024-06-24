const Header = (props) => {
  console.log("Header", props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Parts = (props) => {
  console.log("Parts", props);
  return (
    <>
      <p>
        {props.name} {props.tasks}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((part, index) => {
        return <Parts key={index} name={part.name} tasks={part.exercises} />;
      })}
    </>
  );
};
const Total = ({ parts }) => {
  console.log(parts[0].exercises, [1].exercises, parts[2].exercises);
  let total = 0;
  return (
    <>
      {parts.map((part, index) => {
        total += part.exercises;
      })}
      <p>Number of exercises {total}</p>
    </>
  );
};
const Hello = (props) => {
  const bornYear = () => {
    let year = new Date().getFullYear();
    return year - props.age;
  };
  return (
    <>
    <h2>Hello {props.name} you are {props.age}</h2>
      <p>You were born in {bornYear()}</p>
    </>
  );
};
const App = (props) => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Hello name={"Mitchel"} age={26} />
    </>
  );
};

export default App;
