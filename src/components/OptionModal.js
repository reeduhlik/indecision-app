import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return(
    <Modal ariaHideApp={false} className="modal" isOpen={!!props.selectedOption} closeTimeoutMS={200} contentLabel="Selected Option" onRequestClose={props.handleClearOption}>
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearOption}>Okay</button>
    </Modal>
    );

}

export default OptionModal;