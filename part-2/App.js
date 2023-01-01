const App = () => (
  <div>
    <Tweet
      username="macky"
      user="Colby"
      date={new Date().toDateString()}
      message="Happy New Year!"
    />
    <Tweet
      username="doodle"
      user="Macie"
      date={new Date().toDateString()}
      message="Eat Eat!"
    />
    <Tweet
      username="PewDiePie"
      user="Felix"
      date={new Date().toDateString()}
      message="Whats up gamers!"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
