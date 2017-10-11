// Code ThemedDecoration Component Here
import React from 'react';
import PropTypes from 'prop-types';

class ThemedDecorations extends React.Component {
  render () {
    const childrenWithProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div>
      {childrenWithProp}
      </div>
    );
  }
}

export default ThemedDecorations;
