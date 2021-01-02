/*const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
};
const getName = obj.getName.bind(obj); //breaking it out into a function, no context to this binding
console.log(getName());
*/
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
      console.log("saving data");
    }
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  //handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((optionItem) => {
        return option !== optionItem;
      }),
    }));
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Item in the array already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
    e.target.elements.option.value = "";
  }
  handlePick() {
    //randomly pick option
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomIndex];
    alert(selectedOption);
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: [],
};
/*
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
*/
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "SomeDefault",
};
/*class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
        onClick={this.props.handlePick} 
        disabled={!this.props.hasOptions}>
        What should I do?
        </button>
      </div>
    );
  }
}
*/
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};
/*class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}
*/
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length == 0 && <p>Please add an option to get started</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};
/*
class Option extends React.Component {
  render() {
    return <p>{this.props.optionText}</p>;
  }
}
*/
const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button
        onClick={() => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

/*const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
};
*/
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
