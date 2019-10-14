import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC'
import Subject from './components/Subject'
import Content from './components/Content'
// class Subject extends Component {
//   render(){
//     return (
//       <header>        
//         <h1>{this.props.title}</h1>
//         {this.props.sub}     
//       </header>
//     );
//   }
// }

// class TOC extends Component{
//   render(){
//     return(
//       <nav>
//         <ul>
//             <li><a href="1.html">HTML</a></li>
//             <li><a href="1.CSS">CSS</a></li>
//             <li><a href="1.Javascript">Javascript</a></li>   
//         </ul>     
//     </nav>
//     );
//   }
// }

// class Content extends Component{
//   render(){
//     return(
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//     </article>
//     );
//   }
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      selected_content_id:2,
      welcome:{title:'Welcome', desc:'Hello,Reacat!!'},
      subject:{title:'WEB', sub:'World Wide Web'},
      toc:[
        {id:1, title:'HTML',desc:'HTML is...'},
        
        {id:2, title:'CSS',desc:'CSS is...'},
        {id:3, title:'Javascript',desc:'Javascript is...'},

      ],

      content:{title:'HTML', desc:'HyperTextMarkupLanguage'},
     }
      
  }
  
  render() {
    var _title,_desc=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title
      _desc=this.state.welcome.desc
    }
    else if(this.state.mode==='read'){         
      for(var i=0;i<this.state.toc.length;i++){
        
        var data=this.state.toc[i];
        if(data.id===this.state.selected_content_id){
          _title=data.title;
          _desc=data.desc;
          break;
        }
       
      }
    }
  return (
    <div className="App">
     <Subject 
     
     title={this.state.subject.title} 
     sub={this.state.subject.sub}
     onChangePage={function(){
        
          this.setState({
            mode:'welcome'
          });
        }.bind(this)}
     >
     </Subject>
     
     <TOC
     onChangePage={function(id){
       
       this.setState({
         mode:'read',
         selected_content_id:Number(id),
       })
     }.bind(this)}
     data={this.state.toc}

     ></TOC>

     <Content 
     title={_title}
     desc={_desc}>       
     </Content>
    </div>
  );
 }
}

export default App;
