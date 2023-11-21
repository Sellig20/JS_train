// const App = () => {
//   console.log('Hello from component')
//   return (
//   <div>
//     <p>Hello world</p>
//   </div>
//   )
// }

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   // console.log('hohohoho')
//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//     <p>
//       {a} plus {b} is {a + b}
//     </p>
//     </div>
//   )
// }

////////////////////ENSEMBLE///////////
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//     </div>
//   )
// }
//////////////ENSEMBLE////////////

/////////-----------ENSEMBLE------//////////
// const Hello = (props) => {

//   return (
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="George" />
//       <Hello name="Daisy" />
//     </div>
//   )
// }
/////////-----------ENSEMBLE------//////////



///////+++++ENSEMBLE++++++//////////
// const Hello = (props) => {
//   console.log('props value is ' + props)
//   console.log('props value is ', props)
  
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>GREEETINGS MOTHAFUCKA</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )

// }
// ///////+++++ENSEMBLE++++++//////////
// export default App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState} from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [value, setValue] = useState(10)

  // const handleClick = () =>
  //   console.log('clicked the button')

  
  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text='thousand'/>
      <Button handleClick={() => setToValue(0)} text='reset'/>
      <Button handleClick={() => setToValue(value + 1)} text='increase'/>
    </div>
  )
}