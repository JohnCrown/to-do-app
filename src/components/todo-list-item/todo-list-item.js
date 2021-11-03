import React from 'react';
//получаем значение свойства label из todolist
//используем {props} Это 1 аргумент в каждой функции компонент

import './todo-list-item.css';
//Или такая запись св-в
// const TodoListItem = ({label, important = false }) => {
//     const style = {
//         color: important ? 'tomato' : 'black'
//     } 
    
//     return (
//     <span className="todo-list-item"
//     style={style}>
//         { label }
//     </span>
//     )
    
// }
//extends наследует класс Component
export default class TodoListItem extends React.Component {
  // import React {Component}from 'react'; и тогда не нужно .Component



  // constructor() {
    
  //   super();
  //   this.state =  {
  //     done: false,
  //     important: false
  //   };
//После инициализации стейта напрямую нельзя изменить
//изменяем внутреннее состояние done на true при клике
  //   this.onLabelClick = () => {
  //     this.setState(({done}) => {
  //       return {
  //         done: !done
  //       };
  //     });
  //   };
  //   // this.onLabelClick = () => {
  //   //   this.setState((state) => {
  //   //     return {
  //   //       done: !state.done
  //   //     };
  //   //   });
  //   // };

  //   this.onMarkImportant = () => {
  //     this.setState(({important}) => {
  //       return {
  //         important: !important
  //       };
  //     });
  //   };
  // };

  

                                                                //Class Fields не вошедшее в стандарт

  //на самом объекте ,а не на прототипа создается функция
  // onLabelClick = () => {
  //   console.log(`Done ${this.props.label}`) ;
  // }

  // state =  {
  //   done: false
  // };


  
  //bind()
  // onLabelClick  () {
  //   console.log(`Done ${this.props.label}`) 
  // }


  render () {

    const  { label, onDeleted, onTooggleImportant, onToggleDone,
     important, done} = this.props;
    // const  { done, important } = this.state

    let classNames = 'todo-list-item';
   if  (done) {
     classNames += ' done';
   }

   if (important) {
     classNames += ' important';
   }

    // const style = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };
  //render не принимает на вход значение props 
  //св-ва получаем через this.props
  //в классе св-ва хранятся как поле класса 
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"

          
          //привязываем bind к правильному значению
          onClick={ onToggleDone }> 
          {/* передаем функции ,а не вызываем  если ставим то (undedfined)*/}
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onTooggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick= {onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
      
      
    );
  }
}

// const TodoListItemFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   };

//   return (
//     <span className="todo-list-item">
//       <span
//         className="todo-list-item-label"
//         style={style}>
//         {label}
//       </span>

//       <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation" />
//       </button>

//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );

//   };
