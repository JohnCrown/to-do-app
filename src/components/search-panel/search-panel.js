import React from 'react';
import './search-panel.css'
export default class SearchPanel extends React.Component {

    
    state = {
      term: ''
  };

onUpdateSearch = (e) => {
  const term = e.target.value;
  this.setState({term});
  this.props.onUpdateSearch(term);
};
render() {
    return(
            <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            value={this.state.term} //контролируемый элемент
            onChange={this.onUpdateSearch}
        
            />
            )
  }

}

