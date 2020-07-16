import React, { useState, useEffect } from 'react';
var finalCount = 0;
const Receipt = ({ count, title, amount, source }) => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const item = {
            count: count,
            title: title,
            amount: amount,
            source: source
        }
        finalCount += count;
        console.log(finalCount);
        setOrder(oldorder => [...oldorder, item]);
    }, [count])

    const renderList = () => {
        return order.map((item) => {
            return (
                <div className="item" key={item.title}>
                    <img className="ui avatar image" src={item.source} />
                    <div className="content">
                        <div className="header">{item.title}</div>
                        {item.amount}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="ui ordered list">{renderList()}</div>
    )

}


export default Receipt;