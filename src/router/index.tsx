import { createBrowserRouter } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={'Loading'}><Home /></Suspense>,
  },
  {
    path: "/about",
    element: <Suspense fallback={'Loading'}><About /></Suspense>,
  },
]);
