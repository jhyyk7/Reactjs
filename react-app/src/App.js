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
  return (
    <div className="App">
     <Subject 
     title={this.state.subject.title} 
     sub={this.state.subject.sub}>
     </Subject>
     
     <TOC
     data={this.state.toc}

     ></TOC>

     <Content 
     title={this.state.content.title}
     desc={this.state.content.desc}>       
     </Content>
    </div>
  );
 }
}

export default App;
