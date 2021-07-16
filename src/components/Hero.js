// import React from 'react'

// export default function Hero({children, hero}) {
//     return (
//         <header className={hero}>
//             {children}
//         </header>
//     )
// }

// Hero.defaultProps = {
//     hero: "defaultHero"
// }
// import React from "react";

// const Hero = ({ children, hero }) => {
//   return <header className={hero}>{children}</header>;
// };

// Hero.defaultProps = {
//   hero: "defaultHero"
// };

// class Hero extends React.Component {
//   render() {
//     return (
//       <div>Hello, {this.props.name}</div>
//     );
//   }
// }
// Specifies the default values for props:
// Hero.defaultProps = {
//   name: 'Stranger'
// };


// export default Hero;




// import React, { Component } from 'react'

// export default class Hero extends Component {
//     render() {
//         return (
//           	<header className="defaultHero">{children}</header>
//         )
//     }
// }
// Hero.defaultProps = {
//   hero: "defaultHero"
// };


import React from "react";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

Hero.defaultProps = {
  hero: "defaultHero"
};


export default Hero;