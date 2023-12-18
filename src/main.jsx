import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root.jsx'
import Test from './routes/Test.jsx'
import Result from './routes/Result.jsx'

import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/test',
        element: <Test />,
    },
    {
        path: '/result',
        element: <Result />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
