import React from 'react';
import { DatePicker } from 'antd';

function User() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div style={{ padding: 30 }}>
      <DatePicker onChange={onChange} />
      <br />
      <DatePicker onChange={onChange} picker="week" />
      <br />
      <DatePicker onChange={onChange} picker="month" />
      <br />
      <DatePicker onChange={onChange} picker="quarter" />
      <br />
    </div>
  );
}

export default User;
