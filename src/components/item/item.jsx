import './item.scss'

const Item=({info, itemNew})=>{
    return (
        <div className='budgets'>
           <div className='budgets_address'> {info.address} </div>
           <button type='button' onClick={itemNew} >Найти на карте</button>
            <div className="budgets_items">
            {info.budgets.map((el)=>{
                return <div key = {el} className="budgets_items_item">{el}</div>
            })}
            </div>
        </div>
    )
}

export default Item