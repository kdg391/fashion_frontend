import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Header from '../components/Header.jsx'

import { ANIMAL_EMOJIS } from '../constants.js'
// import { getResult } from '../utils.js'

const Result = () => {
    const [result, setResult] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const location = useLocation()
    const navigate = useNavigate()

    const showResult = useCallback(async () => {
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

                /*const data = getResult(location?.state.answers)
                setIsLoading(false)
                setResult(data)

                navigate(location.pathname, {
                    replace: true,
                })*/
            }
        } else {
            navigate('/', {
                replace: true,
            })
        }
    }, [])

    useEffect(() => {
        showResult()
    }, [showResult])

    return (
        <>
            <Header title="테스트 결과" />
            <main>
                <section>
                    {isLoading ? (
                        <p>결과 불러오는 중</p>
                    ) : (
                        <>
                            <p id="keyword">
                                {result?.keywords.main} {result?.keywords.sub}{' '}
                                {result?.keywords.dep}{' '}
                                {ANIMAL_EMOJIS[result?.keywords.dep]}
                            </p>
                            <div>
                                <h3>추천 코디</h3>
                                <p>{result?.recommendations.join(', ')}</p>
                                <div id="outfits">
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
