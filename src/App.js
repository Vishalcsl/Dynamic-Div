import React, { Component } from 'react';

class App extends Component{
constructor(){
  super();
  this.state={
    count:8,
    subtract:false
  }
  this.autoplay = this.autoplay.bind(this);
}

autoplay = ()=>{

  var play = setInterval(()=>{
    var count = this.state.count;
  
    var newCount = 80;

    if(count === 80){
      this.setState({subtract:true});
    }else if(count === 0){
      this.setState({subtract:false});
    }

    if(this.state.subtract){
      newCount = count -1;
    }else if(!this.state.subtract){
      newCount = count + 1;
    }

    this.setState({count:newCount});
  },40);
}


componentDidMount()
 {
    this.autoplay();
   }
  render()
  {
    var array = new Array(parseFloat(this.state.count));
    for(var i=0;i<array.length;i++)
        array[i]= i;
    var rand = ()=> Math.floor(Math.random()*255);
    var randColor = function randColor()
    {
       return {background: 'rgb(' + rand() + "," + rand() + "," + rand()}
    }
    var divs = array.map((val, index) =>{
      return React.createElement('div',{ style: randColor(), className: 'box', id:'index'}, 'Mishra');
    });
 
    return (
        <div className="App">
            {divs}
        </div>
    )
  }
}

export default App