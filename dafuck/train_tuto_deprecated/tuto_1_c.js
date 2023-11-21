


// const Hello = (props) => {
   
//         const name = props.name
//         const age = props.age
//         const bornYear = () => new Date().getFullYear() - age
    

////////////////// DESTRUCTURATION PETIT c /////////////////////

// const Hello = ({ name, age }) => {
//     const bornYear = () => new Date().getFullYear() - age

//     return (
//       <div>
//         <p>
//           Hello {name}, you are {age} years old
//         </p>
//         <p>So you were probably born in {bornYear()}</p>
//       </div>
//     )
// }

// const App = () => {
//     const name = 'Peter'
//     const age = 10

//     return (
//         <div>
//         <h1>Greetings</h1>
//         <Hello name="Maya" age={26 + 10} />
//         <Hello name={name} age={age} />
//         </div>
//     )
// }
///////////////////////////////////////////////////////////////////

// const App = (props) => {
//   const {counter} = props
//   return (
//       <div>{counter}</div>
//   )
// }

/////////////////////////////////////////////////

import { useState} from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
////////////A DESTRUCTURATION
const Display1 = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

//////////////A FONCTION FLECHEE

const Display2 = ({ counter }) => <div>{counter}</div>

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

/////////////PAREIL POUR BUTTON

const Button1 = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Appa = () => {
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // console.log('rendering...', counter)

  // const handleClick = () => {
  //   console.log('clicked')
  // }
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () =>setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  
  return (
    <div>
      {/* <div>{counter}</div> */}
      <Display counter = {counter}/>
      <Button 
        onClick={increaseByOne}
        text='PLUS 1'
      />
      <Button 
        onClick={setToZero}
        text='ZERO'
      />
      <Button
        onClick={decreaseByOne}
        text='MINUS 1'
      />
    </div>
  )
}

export default Appa

/* <button onClick={() => setCounter(counter + 1)}> ==> <button onClick={increaseByOne}> */