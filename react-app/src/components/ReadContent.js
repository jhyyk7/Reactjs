import React,{Component} from 'react'

class ReadContent extends Component{
    render(){
  
      return(
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
         
          <p><input type="button" value="Update" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}></input></p>
      </article>
      );
    }
  }

  export default ReadContent;