import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 📜 https://react.dev/reference/react/Children
  // 📜 https://react.dev/reference/react/cloneElement
  return React.Children.map(children, child => {
    if (typeof child.type === 'string') {
      // check if its DOM component
      return child
    }
    const newChild = React.cloneElement(child, {on, toggle})
    return newChild

    // or
    // if (allowedToggleTypes.includes(child.type)) {
    //   const newChild = React.cloneElement(child, {on, toggle})
    //   return newChild
    // }
    // return child
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (on ? null : children)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

const allowedToggleTypes = [ToggleOn, ToggleOff, ToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>hello dom component</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
