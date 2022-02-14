import React, { Component, setState } from 'react';

export class GetData extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((result) => {
      result.json().then((resp) => {
        console.log(resp.data)
        this.setState({data:resp.data})
      });
    })
  }
  render() {
    
    return (
      <>
      <table>
        <tr>
          <th>Id</th>
          <th>Year</th>
          <th>Nation</th>
          <th>Population</th>
        </tr>
      {
        this.state.data?
      this.state.data.map((element,i)=>
      <>
      <tr>
        <td>{i}</td>
        <td>{element.Year}</td>
        <td>{element.Nation}</td>
        <td>{element.Population}</td>
      </tr>
        </>
      )
      :
      null
    }
    </table>
      </>
    )
    
  }
}

export default GetData;
