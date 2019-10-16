import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC'
import Subject from './components/Subject'
import ReadContent from './components/ReadContent'
import HomeContent from './components/HomeContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import Control from './components/Control'

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state={
      mode:'welcome',
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
  getcontent(){
      for(var i=0;i<this.state.toc.length;i++){
          
      var data=this.state.toc[i];
      if(data.id===this.state.selected_content_id){

        return data;
        
      }
    } 
    
  }
  render() {
    var _title,_desc,_article,_control=null;
    if(this.state.mode==='welcome'){
     
      _title=this.state.welcome.title
      _desc=this.state.welcome.desc
      _article= <HomeContent title={_title} desc={_desc} ></HomeContent>
      _control=<Control 
      onChangeMode={function(_mode){
       
        this.setState({
          mode:_mode,
        })
      }.bind(this)}
      ></Control>
    }
    else if(this.state.mode==='read'){         
          var _content=this.getcontent();
          _article= <ReadContent title={_content.title} desc={_content.desc} onChangePage={
            function(e){
              this.setState({
                mode:'update'
              })
              console.log(e)
            }.bind(this)
          }></ReadContent>
          
        }
       
      
    else if(this.state.mode==='create'){         
      _title=<p><input type="text" name="title" placeholder="title"></input></p>;
      _desc=<p><textarea name="desc" name="desc" placeholder="description"></textarea></p>;
      _article=<CreateContent onSubmit={function(_title,_desc){
        this.max_content_id=this.max_content_id+1;
        //NOTE: PUSH를 사용하면 원본을 해친다. CONCAT을 사용하면 원본을 해치지 않는다.
        //NOTE: PUSH 를 사용하고 싶으면, var a=Array.from(this.state.content) => a.push({id:this.max_content)id,title:_title,,,}) 이렇게 사용한다. 이와 비슷한 객체는 Object.assign({},a) 를 사용한다.
        // var tocs=this.state.toc.concat({id:this.max_content_id, title:_title, desc:_desc});
        var tocs = Array.from(this.state.toc)
        tocs.push({id:this.max_content_id,title:_title,desc:_desc})
        this.setState({
          selected_content_id:this.max_content_id,
          toc:tocs, 
          mode:'read'
        })
      }.bind(this)} title={_title} desc={_desc}></CreateContent>
    }
    else if(this.state.mode==='update'){        
      _content=this.getcontent();         
      _article=<UpdateContent data={_content} onSubmit={function(_id,_title,_desc){
        var tocs=Array.from(this.state.toc)
        for(var i=0;i<tocs.length;i++){
          if(_id===tocs[i].id){
            tocs[i].title=_title
            tocs[i].desc=_desc
            break;
          }

        }
        // var tocs=this.state.toc.concat({id:_id, title:_title, desc:_desc});
        this.setState({
          toc:tocs, 
          mode:'read'
        })
      }.bind(this)}></UpdateContent>
     
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
    {_control}
    
    {_article}
    </div>
  );
 }
}

export default App;
