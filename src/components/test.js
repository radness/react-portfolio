import React, { Component, Fragment } from 'react';

class test extends Component {

    render() {
        const name='radness';

        return (
            <Fragment>
                <div>
                    {name === 'radness' ? (
                        <h1>삼항연산자 테스트 : {name}</h1>
                    ) : (<h2>삼항연산자 테스트</h2>)
                    }
                </div>
            </Fragment>
        );
    }
}

export default test;