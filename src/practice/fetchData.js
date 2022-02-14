import React, { Component } from 'react';

export class fetchData extends Component {
    constructor(){
        super()
        this.state={
            data:null
        }
    }
    componentDidMount(){
        fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((result)=>{
            result.json().then((resp)=>{
                this.setState({data:resp.data})
            })
        })
    }
  render() {
    return (
      <div>
        <>
        <h1>Fetch the data</h1>
        <table>        {
            this.state.data?
            this.state.data.map((element,i)=>
            <>
                <h2>{i}</h2>
                <h2>{element.Year}</h2>
            </>
            )
            :null
        }
        </table>
        </>
      </div>
    );
  }
}

export default fetchData;
