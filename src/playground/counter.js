class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this); //bound to the function reference
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try{
            const num = parseInt(localStorage.getItem('num'), 10);
            if(!isNaN(num)){
                this.setState(() => ({count: num}));
            }
        } catch (e){

        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count){
            localStorage.setItem('num', this.state.count);
        }
    }
    handleAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        }); //only provide ones you want to change
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset () {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'));

/*let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
 count = 0;
 renderCounterApp(); 
};
 //some JSX attributes have gotten renamed class is className

//need to re-render templateTwo every time, but it doesn't re-render everything every time, only the things that need to be replaced- this is why its so powerful
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  //takes 2 arguments - (JSX, location)
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
*/