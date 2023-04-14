import React,{Component} from "react";

export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    };

    this.sumar=this.sumar.bind(this);
    this.restar=this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState ({
      contador: this.state.contador+1
    });
  }

  restar(e) {
    this.setState ({
      contador: this.state.contador!=0? this.state.contador-1:this.state.contador
    });
  }

  render() {
    return(
      <div className="Counter u-textCenter">
          <h2>{this.props.title}</h2>
          
          <div>
            <button onClick={this.restar}>-</button>
            <span>{this.state.contador}</span>
            <button onClick={this.sumar}>+</button>

            <input
              id={this.props.id}
              name={this.props.id}
              value={this.state.contador}
              type="hidden"
            />
          </div>
      </div>
    )
  }
}

export default Counter;