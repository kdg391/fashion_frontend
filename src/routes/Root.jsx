import { Link } from 'react-router-dom'

import Header from '../components/Header.jsx'

const Root = () => (
    <div>
        <Header title="패션 테스트" />
        <p>자신의 패션 키워드와 추천 옷을 알아보세요!</p>
        <Link to="/test" replace>
            <button id="start-btn">시작하기</button>
        </Link>
    </div>
)

export default Root
