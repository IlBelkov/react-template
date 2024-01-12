import React, { FC } from 'react'
import styles from './style.module.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'

const App: FC = () => {

  return (
    <main className={styles.main}>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
