import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header.jsx'

import { QUESTIONS } from '../constants.js'

const Test = () => {
    const [curIndex, setCurIndex] = useState(0)
    const [answers, setAnswers] = useState([])
    const navigate = useNavigate()

    const { question, image, options } = QUESTIONS[curIndex]

    return (
        <>
            <Header title="패션 테스트" data={{ curIndex }} />
            <main>
                <section>
                    <div>
                        <div>
                            <h3 id="question">
                                {curIndex + 1}. {question}
                            </h3>
                            <div id="img-container">
                                <img
                                    src={`./assets/images/questions/${
                                        curIndex + 1
                                    }.jpg`}
                                    width={256}
                                    alt="참고 이미지"
                                    title={image.reference}
                                    data-url={image.url} // 원본 이미지 URL
                                />
                            </div>
                        </div>
                        <div id="option-container">
                            {options.map(({ option, operation }, index) => (
                                <button
                                    key={index}
                                    className="option"
                                    onClick={() => {
                                        if (curIndex === QUESTIONS.length - 1) {
                                            navigate('/result', {
                                                replace: true,
                                                state: {
                                                    answers,
                                                },
                                            })
                                        } else {
                                            setCurIndex(curIndex + 1)
                                            setAnswers((v) => [...v, operation])
                                        }
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Test
