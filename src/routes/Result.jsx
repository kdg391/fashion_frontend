import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Header from '../components/Header.jsx'

import { ANIMAL_EMOJIS, getData } from '../constants.js'

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

                const data = getData(location?.state.answers)
                setIsLoading(false)
                setResult(data)

                navigate(location.pathname, {
                    replace: true,
                })
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
            <main>
                <section>
                    {isLoading ? (
                        <p>결과 불러오는 중</p>
                    ) : (
                        <>
                            <p
                                style={{
                                    fontSize: '1.25rem',
                                }}
                            >
                                {result?.keywords.main} {result?.keywords.sub}{' '}
                                {result?.keywords.dep}{' '}
                                {ANIMAL_EMOJIS[result?.keywords.dep]}
                            </p>
                            <div>
                                <h4>추천 패션</h4>
                                <p>{result?.recommendations.join(', ')}</p>
                                <div>
                                    {result?.recommendations.map((r, index) => {
                                        const oneOrTwo =
                                            Math.floor(Math.random() * 2) + 1

                                        return (
                                            <img
                                                key={index}
                                                src={`./assets/images/clothes/${r}${oneOrTwo}.jpg`}
                                                style={{
                                                    aspectRatio: '1/1',
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </main>
        </>
    )
}

export default Result
