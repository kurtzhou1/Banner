import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './banner.scss';
import { CLIENT_RENEG_LIMIT } from 'tls';

class Btn extends Component {

    state={
        isOpen: true,
    }

    button= {
		closeText: "收合", // [string]
		openText: "展開", // [string]
		class: "btn" // [string]
      }
      



    closed=() =>{
        const addc = document.getElementsByClassName('banner')[0]; 
        addc.classList.toggle('closed');
        this.setState=false;
    }

    opened=() =>{
        const addc = document.getElementsByClassName('banner')[0]; 
        addc.classList.toggle('opened');
        this.state=2;
    }
        
    componentDidMount(){
        if(this.state==='2'){
            this.closed();
        }else{
            this.opened();
        }

    }

    autoToggle = () =>{
        console.log('autoToggle')
    }

    close=() =>{
        alert('close')

    }

    open = () => {
        this.setState({ isOpen: true });
        if (this.props.open) {
            alert('open')
        }
    }
    Mommy = () => {
            alert('Good!!!')
    }


    render() { 
        console.log('props', this.props)
        console.log('render()')
        const { isOpen } = this.state;
        // isOpen = this.state.isOpen
        return (
            <div>
            <div className="Link">{this.props.name1}</div>
            {/* <button className='btn' onClick={this.closed}>{this.button.closeText}</button> */}
            {/* <button className='btnn' onClick={`open ${this.state.isOpen ? 'opened' :'closed'}`}></button> */}
            <button onClick={this.Mommy}>Mommy</button>
            
            </div>
         );
    }
}

// ReactDOM.render(<Banner/>, document.getElementsByClassName("banner")[0]);
// <button className={this.state.isOpen ? 'open' :'closed'} onClick={`open ${this.state.isOpen ? 'open' :'closed'}`}>open</button>
// <button className='open' onClick={`open ${this.state.isOpen ? 'open' :'closed'}`}>open</button>
export default Btn;