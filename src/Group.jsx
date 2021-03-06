import React, { Component } from 'react';
import Unit from './Unit.jsx';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = { rootValue: 0 };
    this.setRoot = this.setRoot.bind(this);
    this.dataToEl = this.dataToEl.bind(this);
  }

  setRoot(rootValue) {
    this.setState({ rootValue });
  }

  dataToEl(unitData) {
    return (<Unit {...unitData} setRoot={this.setRoot} rootValue={this.state.rootValue} key={unitData.unit}/>);
  }

  render() {
    const elements = this.props.unitDatas.map((unitData, i) => {
      if (typeof unitData === 'string') {
        if (i === 0) return <h3>{unitData}</h3>;
        else return <h4>{unitData}</h4>;
      } else
        return (this.dataToEl(unitData))
    });
    return (<div className='group'>{elements}</div>);
  }
}

export default Group;