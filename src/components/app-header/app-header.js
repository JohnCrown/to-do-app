import React from 'react';
import './app-header.css';

//Реакт компонент  заголовок
const AppHeader = ({toDo, done}) => {
    return (
      <div className="app-header d-flex">
      <h1>To do list</h1>
      <h2> {toDo} more to do,  done {done} </h2>
      </div>
    );
  };

  export default AppHeader;