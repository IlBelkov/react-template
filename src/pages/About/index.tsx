import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const About: FC = () => {
  const navigate = useNavigate()

  return (
    <section>
      <h1>About</h1>
      <button onClick={() => navigate(-1)}>back</button>
    </section>
  )
}

export default About
