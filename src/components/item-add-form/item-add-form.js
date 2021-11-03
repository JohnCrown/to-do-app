import React , {Component} from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };



    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
            //Текущее значение поля
        });
    };

    
onSubmit = (e) => {
    e.preventDefault();
    //Отменяем стандартное поведение
 this.props.onItemAdded(this.state.label);
 this.setState({
    label: ''
 });
};



    render() {
        return (
            <form className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>

                <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
                onChange={this.onLabelChange}
                value={this.state.label}
                //Контролируемый элемент - обратная связь между стейтом и компонетом
                //value элемента берем из состояния state компонента
                />

                <button
                    type="submit"
                    className="btn btn-outline-secondary btn-my">
                    
                    Publish
                </button>
            </form>
    
        )
    }
}