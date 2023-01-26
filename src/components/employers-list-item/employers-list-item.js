
import './employers-list-item.css';

// var btn = document.getElementsByClassName("fas fa-cookie");
// btn = false;
// const but = document.querySelector("#but");
// btn.addInventListener('click', () => {
//     btn = true;
// });
// if(btn === true){
//     but.innerHTML('increase');
// }
const EmployersListItem = (props) => {

        const {name,salary, onDelete,onToggleProp, increase,rise} = props;
        let classNames = "list-group-item d-flex justify-content-between";
        // eslint-disable-next-line no-unused-vars
        if(rise){
            classNames+= ' like';
        }
        else if(increase){
            classNames+= ' increase'
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label " onClick={onToggleProp}
                data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary}
               />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
}

export default EmployersListItem;