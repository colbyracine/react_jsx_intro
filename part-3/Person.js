const maxNameLength = 6;

const Person = (props) => {
  let voteText;
  if (props.age < 18) {
    voteText = "You must be 18!";
  } else if (props.age > 18) {
    voteText = "Please go vote!";
  }

  const idx = Math.floor(Math.random() * props.hobbies.length);
  const choice = props.hobbies[idx];

  return (
    <div>
      <p>Learn some information about this person, {props.name}</p>
      <ul>
        <li>Name: {props.name.slice(0, maxNameLength)}</li>
        <li>Age: {props.age}</li>
        <li>{voteText}</li>
      </ul>
      <p>Hobbies: {choice}</p>
    </div>
  );
};
