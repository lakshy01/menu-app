import React from 'react';

class MenuItem extends React.Component {

    state = { count: 0, setColor: '' };

    decrement = () => {
        if (this.state.count === 0) {
            return;
        }
        this.setState({ count: this.state.count - 1 });
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    onFinalChange = () => {
        this.props.getCount(this.state.count, this.props.item.title, this.props.item.amount, this.props.item.source);
    }

    render() {

        const { source, title, amount, description } = this.props.item;

        return (
            <div className="card">
                <div className="image">
                    <img src={source} />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">
                        <a>{amount}</a>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        <div className="ui icon button" data-tooltip="Click To Add" onClick={this.increment}>
                            <i className="add icon" style={{ color: 'green' }}></i>
                        </div>
                    </span>
                    <span>
                        <div className="ui icon button" data-tooltip="Click To Deduct" onClick={this.decrement}>
                            <i className="minus icon" style={{ color: 'red' }}></i>
                        </div>
                    </span>
                    <span>
                        <div className="ui icon button" style={{ marginLeft: '70px' }}>
                            <div onClick={this.onFinalChange}>{this.state.count}</div>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default MenuItem;