import React,{Component} from 'react'

class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc
        }
        this.informhandler=this.informhandler.bind(this);
    }
    informhandler(e){       
            this.setState({[e.target.name]:e.target.value})
    }
    
    render(){                  
      return(
          
        <article>
          <h2>Update</h2>
          <form action="/update_process" method="POST" onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(this.state.id,this.state.title,this.state.desc)
                }.bind(this)}>
                <p><input type="hidden" name="id" value={this.state.id}></input></p>
                <p><input type="text" name="title" value={this.state.title}
                onChange={this.informhandler}
                placeholder="title"></input></p>
                <p><textarea name="desc" name="desc" value={this.state.desc} 
                onChange={this.informhandler}
                placeholder="description"></textarea></p>
                
                <p><input type="submit" value="submit"></input></p>
            </form>
        </article>
        
      );
    }
  }

  export default UpdateContent;