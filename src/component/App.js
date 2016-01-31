import React, {Component} from "react"
import ReactDOM from "react-dom"
import parse from "pixelbank"


const Input = function({url, onClick, onChange}){
  return (
    <div>
      <input value={url} onChange={onChange}/>
      <button onClick={onClick} >Send</button>
    </div>
  )
}
class ImgCanvas extends Component{
  getContext(){
    return 
  }
  drawCanvas(){
    let canvas = ReactDOM.findDOMNode(this.refs.cnv)
    let ctx = canvas.getContext('2d')
    ctx.drawImage(ReactDOM.findDOMNode(this.refs.img), 0,0)
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    console.log(imgData)
  }
  handleLoad(){
    this.drawCanvas()
  }
  render(){
    return <div>
      <img ref="img" src={this.props.preview} onLoad={this.handleLoad.bind(this)}/>
      <canvas ref="cnv" />
    </div>
  }
}
export default class App extends Component{
  handleSend(){
    this.props.getImage(this.props.url)
  }
  handleChange(e){
    this.props.changeUrl(e.target.input)
  }
  handleLoad(e){
    console.log(e.target)
  }
  render(){
    return (
      <div>
        <Input 
          url={this.props.url} 
          onClick={this.handleSend.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
        <ImgCanvas preview={this.props.preview} />
      </div>
    )
  }
}

