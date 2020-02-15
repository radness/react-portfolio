import React, { Component, Fragment } from 'react';
import '../App.css';

class test extends Component {

    render() {
        const name='radness';

        const style = {
            // DOM 요소에 스타일을 적용할 떄는 문자열 형태로 넣는 것이 아니라
            // 객체 형태로 넣어줘야 합니다.
            backgroundColor: 'black',
            color: 'aqua',
            fontSIze: '48px',
            fontWeight: 'bold',
            padding: 16 // 단위를 생략하면 px로 저장됩니다.
        };

        return (
            <Fragment>
                <div>
                    {name === 'radness' ? (
                        <h1>삼항연산자 테스트 : {name}</h1>
                    ) : null
                    }
                    {name === 'radness' && <h1>{name} 입니다.</h1>}
                </div>
                <div style={style}>
                    {name}
                </div>
                <div className="react">
                    {name}
                </div>
            </Fragment>
        );
    }
}

export default test;