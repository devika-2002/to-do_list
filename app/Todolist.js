import React from 'react'


const Todolist=(props)=>{
    return(
        <li className="list-item">
            <input type="checkbox"  className="check-box"/>
            {props.item}
            <span className="icons">
                <button onClick={()=>{
                    props.deleteItem(props.index)
               }}>Remove</button>
            </span>
        </li>
    )
}
export default  Todolist;
