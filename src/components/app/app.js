import React from 'react';
// import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';



import './app.css';
//Реакт компонет список дел
//С большой буквы , с маленькой html тэг

// const loginBox = null; или undefined не будет ошибкой
// const loginBox = <span>Log in please</span>
// //Реакт компонент  инпут-поиск
// const isLoggedIn = true;
// const welcomeBox = <span>Welcome box</span>


export default class App extends React.Component {

maxId = 100;

  // const value = '<script >alert("")</script>' //Проверка на безопастность скриптов
  //данные для списка дел хранятся на самом вверху в компоненте App

state = {
  todoData : [
    this.createTodoItem('Drink Coffee'),
    this.createTodoItem('Make AweSome App'),
    this.createTodoItem('Drink Cofe'),
    // {label: 'Drink Water', important: false , id : 1},
    // {label: 'Make AweSome App', important: true,id : 2},
    // {label: 'Have a  Water', important: false,id : 3},
  ],
  term: '',
  filter: 'all'
};

createTodoItem(label) {
  return {
    label,
    important: false,
    done: false,
    id: this.maxId++
  }
}




deleteItem = (id) => {
  this.setState(({ todoData }) => {
    const idx = todoData.findIndex((el) => el.id === id) ;
    //                                                         Нельзя изменять сущ. стейт!!!

    //Удаляем элементы из массива
    //slice не изменяет сущ. массив
    // [a,b,c,d,e]
    //[a,b  d,e]
    // const before = todoData.slice(0, idx);//0 начало idx - конец.
    // const after = todoData.slice(idx + 1);//сам индекс пропадет до конца ,если не передаем то от индекда до конца
    
    const newArr = [
      ...todoData.slice(0, idx),
      ...todoData.slice(idx + 1)
    ];

  //   const newArr = [...before , ...after]

    return {
      todoData: newArr
    }

  });
};


// addItem = (text) => {
//    //generate Id
//    const newItem = this.createTodoItem(text);
//   // {
//   //    label: text, 
//   //    important: false,
//   //    id: this.maxId++
//   //  };
//    console.log('Added', text);
//   //add element in arr

//   this.setState(({todoData})=> {
//       const newArray = [
//         ...todoData,
//         newItem
//       ];
//       return {
//         todoData: newArray
//       };
//   });

// };



toggleProperty(arr, id, propName) {
  const idx = arr.findIndex((el) => el.id === id);

  const oldItem = arr[idx];
  const newItem = {...oldItem,
    [propName]: !oldItem[propName]};

  return [
    ...arr.slice(0, idx),
    newItem,
    ...arr.slice(idx + 1)
  ];
}

onToggleDone = (id) => {
  this.setState(({ todoData }) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'done')
    };
  });
};

onToggleImportant = (id) => {
  this.setState(({ todoData }) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'important')
    };
  });
};


onUpdateSearch = (term) => {
  this.setState({term});
};

onFilterChange = (filter) => {
  this.setState({filter});
};

search(items, term) {
  if (term === 0) {
    return items;
  }
  return items.filter((item) => {
  return item.label
  .toLowerCase()
  .indexOf(term.toLowerCase()) > -1;
  });
}

filter(items, filter) {
  switch(filter) {
    case 'all': 
     return items;

     case 'active': 
      return items.filter((item) => !item.done);

     case 'done': 
      return items.filter((item) => item.done);
      default: 
      return items;
  }
}


render () {

  const { todoData, term, filter } = this.state;
  const visibleItems = this.filter(this.search(todoData, term), filter);

  const doneCount = this.state.todoData
                     .filter((el) => el.done).length;

  const todoCount = todoData.length - doneCount;
  return (
    
    <div className="todo-app">
        {/* {value} */}
        {/* <span>{ (new Date ()).toString() }</span> */}
        {/* { isLoggedIn ? welcomeBox : loginBox } */}
        <AppHeader toDo = {todoCount} done = {doneCount} />
        <div className="top-panel d-flex">
        <SearchPanel
        onUpdateSearch = {this.onUpdateSearch} />
        <ItemStatusFilter 
        filter= { filter }
        onFilterChange= {this.onFilterChange}/>
        </div>
        
        <TodoList 
        todos = { visibleItems }  
         onDeleted= { this.deleteItem }
         onTooggleImportant = {this.onToggleImportant}
         onToggleDone = {this.onToggleDone}/> 
        {/* todolist получает св-ва todos */}
        
        <ItemAddForm 
        onItemAdded={this.addItem}/>
        
    </div>
    );
 }

};



// const el = (<Application />);
//1) 1 аргумент это элемент (<Такой>) который мы отрендерим
//2) 2 аргумент это элемент на стринице в которую рендерим

// const el = React.createElement('h1' , null, 'Hello World'); webpack запускает babel который преобразует 
//// const el = <h1>Hello WOrld !</h1>; ====> // const el = React.createElement('h1' , null, 'Hello World');
//В jsx если блок кода содрежит несколько строк то ставь ()


