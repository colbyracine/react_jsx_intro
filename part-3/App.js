const App = () => {
  return (
    <div>
      <Person
        name="Colby"
        age="29"
        hobbies={["gaming", "fishing", "sewing", "disc golf", "sleeping"]}
      />
      <Person
        name="Hannah"
        age="29"
        hobbies={["gaming", "fishing", "sewing", "disc golf", "sleeping"]}
      />
      <Person
        name="Macie"
        age="1"
        hobbies={["gaming", "fishing", "sewing", "disc golf", "sleeping"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
