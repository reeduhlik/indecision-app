console.log("app.js");

//JSX - JavaScript XML
const app = {
    title: "Indecision App",
    subtitle: "This is my first real React App",
    options: []
};
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  (option && app.options.push(option));
  e.target.elements.option.value = "";
  renderApp();
}
const removeAll = () => {
  app.options = [];
  renderApp();
}
const onMakeDecision = () => {
  const randomIndex = Math.floor(Math.random()* app.options.length);
  const selectedOption = app.options[randomIndex];
  alert(selectedOption);

}
const appRoot = document.getElementById("app");
const numbers = [55, 101, 1000];
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
      { app.options.length > 0 && <button onClick={onMakeDecision}>Choose Option</button>}
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((element) => <li key={element}>{element}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
//need to provide key in li to let react optimize itself
ReactDOM.render(template, appRoot);
}

renderApp();