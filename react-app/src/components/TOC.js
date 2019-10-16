import React,{Component} from 'react'

class TOC extends Component{
    shouldComponentUpdate(newProps,newState){
     
      if(this.props.data===newProps.data){
        return false;
        //NOTE: false=> render 함수 호출 X, true=>render 함수 호출O 따라서 CRUD로 data의 변경이 있을 때만 render함수 호출하는게 효율적이다.
      }
      return true;
    }
    render(){
    
      var lists=[];
      var data=this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
        <li key={data[i].id}>
          <a
           href={"./content"+data[i].id}
           data-id={data[i].id}
           onClick={function(e){
             e.preventDefault();             
             this.props.onChangePage(e.target.dataset.id);
           }.bind(this)}
           >{data[i].title}
           </a></li>)
        i++;
      }
      
      return(
        <nav>
          <ul>
                {lists}           
          </ul>     
      </nav>
      );
    }
  }
  export default TOC;