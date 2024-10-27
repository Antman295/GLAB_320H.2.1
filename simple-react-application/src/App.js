import { useState } from 'react'
import './App.css';
import Button from './components/Button.js'
import Display from './components/Display.js';
import EvenOrOdd from './components/EvenOrOdd.js';


function Header() {
  return (<h1>Simple React Application</h1>)
}

function Content(props) {
  return (<p style = {{color: props.color}}>{props.text}</p>)
}

function Footer() {
  return (<h2>Created by Anthony, which is me. Please be nice to me</h2>)
}

function App() {

  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Content color = "blue" text="This is my first React Application!"/>
      <Content color = "green" text="Am I doing a good job?" />
      <Content color = "red" text="I hope you said yes. I'm trying my hardest here >:(" />
      <Footer />
      <Button count={count} setCount={setCount}/>
      <Display count={count} />
      <EvenOrOdd count={count} />
    </>
  );
}

export default App;
