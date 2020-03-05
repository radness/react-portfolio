import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 비구조화 할당 (destructuring assignment)
// const MyComponent = props => {
//   const { name, children } = props;
//   return (
//     <div>
//       name: {name}
//       <br />
//       children: {children}
//     </div>
//   );
// };

// const MyComponent = ({ name, favoriteNum, children }) => {
//   return (
//     <div>
//       name: {name}
//       <br />
//       children: {children}
//       <br />
//       favoriteNum: {favoriteNum}
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: 'radness'
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNum: PropTypes.string.isRequired
// };

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름'
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.string.isRequired
  };

  render() {
    const { name, favoriteNum, children } = this.props; // 비구조화 할당
    return (
      <div>
        name: {name}
        <br />
        children: {children}
        <br />
        favoriteNum: {favoriteNum}
      </div>
    );
  }
}

export default MyComponent;
