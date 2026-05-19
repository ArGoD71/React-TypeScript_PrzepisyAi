import type {JSX} from 'react'


export default function Header():JSX.Element {
  return (
    <div className="header">
      <h1>Witaj, Co dzisiaj gotujemy?</h1>

      <img src="RobotIconWithoutBackground.png" alt="RobotIcon" height="200px"/>
    </div>
  )
}