import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Header from '../components/Header.jsx'

const Result = () => {
    const [result, setResult] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const location = useLocation()
    const navigate = useNavigate()

    const getResult = useCallback(async () => {
        if (location.state?.answers) {
            try {
                const res = await fetch(
                    process.env.NODE_ENV === 'production'
                        ? 'https://fashion-analysis-test.loca.lt/submit'
                        : 'http://localhost:5000/submit',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(location.state?.answers),
                    },
                )

                const data = await res.json()

                setIsLoading(false)
                setResult(data)

                navigate(location.pathname, {
                    replace: true,
                })
            } catch (err) {
                console.error(err)
            }
        } else {
            navigate('/', {
                replace: true,
            })
        }
    }, [])

    useEffect(() => {
        getResult()
    }, [getResult])

    return (
        <>
            <Header title="테스트 결과" />
            {isLoading ? (
                <p>결과 불러오는 중</p>
            ) : (
                <>
                    <p>
                        {result?.keywords.main} {result?.keywords.sub}{' '}
                        {result?.keywords.dep}
                    </p>
                    <h4>추천 패션</h4>
                    <p>{result?.recommendations.join(', ')}</p>
                    {result?.recommendations.map((r, index) => {
                        return (
                            <img
                                key={index}
                                src={`/assets/images/${r}${
                                    Math.floor(Math.random()) + 1
                                }.jpg`}
                            />
                        )
                    })}
                </>
            )}
        </>
    )
}

export default Result
