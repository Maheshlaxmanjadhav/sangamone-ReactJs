import React from 'react';

class name_age extends React.Component {
    render(){
        let a = [
            { name:"mahesh", age:"26" },
            { name:"ramesh", age:"30" }
        ];
        return (
            <div>
                {
                    a.map((x)=>{
                        return (
                            <div>
                                <h1>{x.name}</h1>
                                <h1>{x.age}</h1>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
  /*return (
      // <h1>{evenOdd.keys}</h1>
      //<h1>mahesh</h1>
  );*/
}
export default name_age;
