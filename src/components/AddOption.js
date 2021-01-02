import React from 'react';

export default class AddOption extends React.Component {
    render() {
      return (
        <div>
          <form className="add-option" onSubmit={this.props.handleAddOption}>
            <input type="text" name="option" className='add-option__input'/>
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
}