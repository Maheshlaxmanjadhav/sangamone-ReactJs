import React from 'react';
let data_odd=[1,3,5,7,9];
export default function odd() {
  return (
    <div>
      <h5>{data_odd[0]}</h5>
      <h5>{data_odd[1]}</h5>
      <h5>{data_odd[2]}</h5>
      <h5>{data_odd[3]}</h5>
      <h5>{data_odd[4]}</h5>
    </div>
  );
}
