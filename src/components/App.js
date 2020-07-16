import React from 'react';
import MenuItem from './MenuItem';
import pizza from '../images/pizza.jpg';
import ChickenSoup from '../images/ChickenSoup.jpg';
import KoreanStew from '../images/koreanStew.jpg';
import thaicurry from '../images/thaicurry.jpg';
import ReceiptItem from './ReceiptItem';

const menu = [
    {
        id: 1,
        source: pizza,
        title: 'Pizza',
        amount: '500$',
        description: 'Margarita Pizza available with organic indegredients.'
    },
    {
        id: 2,
        source: ChickenSoup,
        title: 'Soup',
        amount: '300$',
        description: 'Extremely delicious and spicy food.'
    },
    {
        id: 3,
        source: KoreanStew,
        title: 'Stew',
        amount: '400$',
        description: 'Extremely spicy!!! Bon apettite!!'
    },
    {
        id: 4,
        source: thaicurry,
        title: 'Curry',
        amount: '200$',
        description: 'Original flavoured thai curry'
    }
]

class App extends React.Component {

    state = { btnText: 'checkout', btncolor: 'maroon', open: false, count: 0, title: '', amount: 0, source: '' };

    onBtnChange = () => {
        this.setState({
            btnText: 'download',
            btncolor: 'blue',
            open: true
        })
    }

    onSearchCount = (count, title, amount, source) => {
        this.setState({
            count: count,
            title: title,
            amount: amount,
            source: source
        })
    }

    renderList = () => {
        return menu.map((item) => {
            return (
                <MenuItem item={item} getCount={this.onSearchCount} key={item.id} />
            )
        })
    }

    render() {

        if (this.state.open) {
            return (
                <div className="ui container segment">
                    <h2>Bill</h2>
                    <ReceiptItem count={this.state.count} title={this.state.title} amount={this.state.amount} source={this.state.source} />

                </div>
            )
        }

        return (
            <div className="ui container segment">
                <h2>Menu</h2>
                <div className="ui links cards">
                    {this.renderList()}
                </div>
                <button onClick={this.onBtnChange} className="ui button" style={{ marginTop: '30px', marginLeft: '400px', backgroundColor: this.state.btncolor, color: 'white' }}><i className="balance scale icon" style={{ color: 'white' }}></i>{this.state.btnText}</button>
            </div>
        )
    }
}

export default App;