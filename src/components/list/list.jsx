import React from "react";
import Item from "../item/item";
import "./list.scss"
const List = ({items, getItem})=>{
    let res=[];
    if(items!==undefined){
        res=items;
    }
    const listItem = res.map((el, id)=>{
       return <li key={id} ><Item info={el} itemNew = {()=>getItem(el)}>

        </Item></li>
    })
    return (
        <div>
        <ul className="itemList">
            {listItem}
        </ul>
        </div>
        )

    }
export default List;

