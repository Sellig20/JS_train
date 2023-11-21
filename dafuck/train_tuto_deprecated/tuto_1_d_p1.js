import { useState} from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right)
    }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left)
    }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text ='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
      <History allClicks={allClicks} />
    </div>
  )

}

export default App;















//////////ENSEMBLE ! //////////////////////
// let counter = 1;
// const refresh = () => {
//     ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter} />)

// }
// setInterval(() => {
//     refresh();
//     counter += 1;

// }, 1000)
// refresh();
// counter += 1;
// refresh();
/////////////////ENSEMBLE !/////////////////

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


/////////////////////////////////////////////////////