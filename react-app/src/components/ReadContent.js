import React,{Component} from 'react'

class ReadContent extends Component{
    render(){
  
      return(
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
         
          <p><a href="/update"  onClick={function(e){
            e.preventDefault();
            this.props.onChangePage('update');
          }.bind(this)}>Update</a></p>
          <p><input type="button" value="Delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage('delete')
          }.bind(this)}></input></p>
          
      </article>
      );
    }
  }

  export default ReadContent;