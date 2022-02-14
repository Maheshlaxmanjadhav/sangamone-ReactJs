import React, { Component, setState } from 'react';

export class ApiFetch extends Component {
  constructor(){
    super();
    this.state={
      data:false
    }
  }

  componentDidMount(){
   fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((result)=>{
      result.json().then((resp)=>{
        this.setState({data:resp})
      })
    })
  }
  render() {
   const data=this.state.data;
    console.warn(data);
    return (
      <div>
        {
          data ? 
          <div>
            <p>Year: {data.data[0].Year}</p>
            <p>Year: {data.data[1].Year}</p>
            <p>Year: {data.data[2].Year}</p>
            <p>Year: {data.data[3].Year}</p>
            <p>Year: {data.data[4].Year}</p>
            <p>Year: {data.data[5].Year}</p>
            <p>Year: {data.data[6].Year}</p>
          </div>
          :<p>Please wait....</p>
        }
      </div>
    );
  }
}

export default ApiFetch;
