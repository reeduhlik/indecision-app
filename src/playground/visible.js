class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleState = this.handleState.bind(this);
        this.state = {
            toggled: true
        };
    }

    handleState() {
        this.setState((prevState) =>{
            return {
                toggled: !prevState.toggled
            }
        });
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleState}>{this.state.toggled ? 'Show Details' : 'Hide Details'}</button>
            {!this.state.toggled && <p>This is some text</p>}
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
/*let hidden = true;
const changeState = () => {
    (hidden == true) ? hidden = false : hidden = true;
    renderApp();
}

const renderApp = () => {
const template= (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={changeState}>{hidden == true ? 'Show Details' : 'Hide Details'}</button>
    {hidden==false && <p>This is some text</p>}
    </div>
);

}

renderApp()
*/

ReactDOM.render(<Visibility />, appRoot);