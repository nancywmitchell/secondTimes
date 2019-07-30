import React from 'react'

const ItemCard = (props) => {
    const item = props.item
    
    return (
        <div className="itemCard">
            <img src={item.imgUrl} height="100px"></img>
            <a href={item.url}>{item.title}</a>
            <div>{item.price}</div>
            <div>{item.size}</div>
        </div>
    )
}

export default ItemCard