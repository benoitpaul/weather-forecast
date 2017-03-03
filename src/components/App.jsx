import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateString } from '../reducers/actions.js';

/*global  */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>BP React Seed</h1>  
        {this.props.children}
        <div><button onClick={() => this.props.updateString("test")}>a button</button></div>
        <div>{this.props.aString}</div>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
  aString: React.PropTypes.string,
  updateString: React.PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    aString: state.aString
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateString}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);