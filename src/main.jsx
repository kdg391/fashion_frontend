import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root.jsx'
import Test from './routes/Test.jsx'
import Result from './routes/Result.jsx'

import './index.css'

const router = createHashRouter(
    [
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
        {
            path: '*',
            element: <h1>404 Not Found</h1>,
        },
    ],
    {
        basename: '/',
    },
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
