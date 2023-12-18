import PropTypes from 'prop-types'

import { QUESTIONS } from '../constants.js'

const Header = (props) => (
    <header>
        <div id="title">
            <h1>{props.title}</h1>
            {props?.data !== undefined && (
                <div id="progress-text">
                    {props.data.curIndex + 1} / {QUESTIONS.length}
                </div>
            )}
        </div>
        {props?.data !== undefined && (
            <div id="progress">
                <div
                    id="progress-bar"
                    style={{
                        width: `${
                            100 * (props.data.curIndex / (QUESTIONS.length - 1))
                        }%`,
                    }}
                ></div>
            </div>
        )}
    </header>
)

Header.propTypes = {
    title: PropTypes.string,
    data: PropTypes.shape({
        curIndex: PropTypes.number,
    }),
}

export default Header
