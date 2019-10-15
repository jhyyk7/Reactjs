import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC'
import Subject from './components/Subject'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import Control from './components/Control'
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
    this.max_content_id=3;
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

     }
      
  }
  
  render() {
    var _title,_desc,_article=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title
      _desc=this.state.welcome.desc
      _article= <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode==='read'){         
      for(var i=0;i<this.state.toc.length;i++){
        
        var data=this.state.toc[i];
        if(data.id===this.state.selected_content_id){
          _title=data.title;
          _desc=data.desc;
          _article= <ReadContent title={_title} desc={_desc}></ReadContent>
          break;
        }
       
      }
    }
    else if(this.state.mode==='create'){         
      _title=<p><input type="text" name="title" placeholder="title"></input></p>;
      _desc=<p><textarea name="desc" name="desc" placeholder="description"></textarea></p>;
      _article=<CreateContent onSubmit={function(_title,_desc){
        this.max_content_id=this.max_content_id+1;
        //NOTE: PUSH를 사용하면 원본을 해친다. CONCAT을 사용하면 원본을 해치지 않는다.
        //NOTE: PUSH 를 사용하고 싶으면, var a=Array.from(this.state.content) => a.push({id:this.max_content)id,title:_title,,,}) 이렇게 사용한다. 이와 비슷한 객체는 Object.assign({},a) 를 사용한다.
        var tocs=this.state.toc.concat({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          toc:tocs, 
          mode:'welcome'
        })
      }.bind(this)} title={_title} desc={_desc}></CreateContent>
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
    <Control 
    onChangeMode={function(_mode){
     
      this.setState({
        mode:_mode,
      })
    }.bind(this)}
    ></Control>
    {_article}
    </div>
  );
 }
}

export default App;
