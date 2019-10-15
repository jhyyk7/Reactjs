import React,{Component} from 'react'

class CreateContent extends Component{
    render(){
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="POST" onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(e.target.title.value,e.target.desc.value)
              }.bind(this)}>                           
              {this.props.title}
              {this.props.desc}
              <input type="submit" value="submit"></input>
          </form>
      </article>
      );
    }
  }

  export default CreateContent;