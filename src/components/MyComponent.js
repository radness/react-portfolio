import React from 'react';

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

const MyComponent = ({ name, children }) => {
  return (
    <div>
      name: {name}
      <br />
      children : {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'radness'
};

export default MyComponent;
