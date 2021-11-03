import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, 
                    onTooggleImportant,
                    onToggleDone}) => {
  //Значение по умолчанию если не передать значение true
  // label ; = label = {true}
//Передаем любые св-ва в реакт компоненты
//Создаем массив elements и для каждого (item) массива создаем Jsx элемент
  const elements = todos.map ((item) => {
    //используем rest параметр
    //добавляем еще 1 параметр в который войдут все те св-ва объекта
    //которые не были деструктурированны то есть все св-ва кроме Id
    const { id , ...itemProps} = item;


   return (
      <li key = {id} className="list-group-item"> 
        {/* <TodoListItem 
          label = {item.label}
          important = {item.important} /> */}
          <TodoListItem {...itemProps }
           onDeleted={() => onDeleted(id)} 
           onTooggleImportant={() => onTooggleImportant(id)}
           onToggleDone = {() => onToggleDone(id)}/>
          {/* Spread oper */}
          {/* Взять каждое св-во из  объекта item 
          и передать его в качестве аттрибута вместе со значение в todolist */}
      </li> 
    );
//() если jsx несколько строк кода занимает
  });

    return (
      <ul className="list-group todo-list">
        {/* //добавляем все эементы поочередно  */}
       {elements}
         

      </ul>
    );
  };

  export default TodoList;