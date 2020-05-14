import React, {Component} from 'react';

// class App extends Component{
//   render() {
//     return(
//       <input type="text" onChange={() => console.log("chnge text")} />
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  );
}

const Cat = () => {
  return (
    <div>ニャー</div>
  )
}


export default App;
