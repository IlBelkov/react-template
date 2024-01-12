import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import img from '@/assets/image.png'
import Logo from '@/assets/logo.svg'

const Home: FC = () => {
  const [count, setCount] = React.useState(0)

  const handlerInc = () => setCount(count + 1)

  return (
    <section>
      <h1>Home</h1>
      <img src={img} alt=""/>
      <Logo width={30} height={100} />
      <h1>Hello counter</h1>
      <div>{count}</div>
      <button onClick={handlerInc}>Increment</button>
      <Link to={'/about'}>About</Link>
    </section>
  )
}

export default Home
