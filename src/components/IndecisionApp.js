import React from 'react';
import AddOption from './AddOption';
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    //handleDeleteOptions
    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (option) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((optionItem) => {
          return option !== optionItem;
        }),
      }));
    }
    handleAddOption = (e) => {
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
    handlePick = () => {
      //randomly pick option
      const randomIndex = Math.floor(Math.random() * this.state.options.length);
      const selectedOption = this.state.options[randomIndex];
      this.setState(() => ({selectedOption}));
    }
    handleClearOption = () => {
        this.setState(() => ({selectedOption: undefined}));
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
    render() {
      const title = "Indecision";
      const subtitle = "Put your life in the hands of a computer";
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
          </div>
          </div>
          <OptionModal selectedOption={this.state.selectedOption} handleClearOption={this.handleClearOption}/>
        </div>
      );
    }
  }
  IndecisionApp.defaultProps = {
    options: [],
  };
