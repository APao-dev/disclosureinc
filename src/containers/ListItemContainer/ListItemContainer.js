import React from 'react';
import Login from '../../components/ListItem/ListItem';
import Visualizer from '../../components/Visualizer/Visualizer';

export default class ListItemContainer extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            productoInput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.setState({[event.target.name]: event.target.value})
    }


    render(){
        return(
        <div>
            <Login InputChange={this.handleInputChange}/>
            <Visualizer greeting={this.state.productoInput} />
        </div>
    )
}
}