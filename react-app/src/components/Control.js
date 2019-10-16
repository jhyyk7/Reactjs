import React,{Component} from 'react'

class Control extends Component{
    render(){
    return(
        <p><a href="/create" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></p>
            
    );
  }
}

  export default Control;