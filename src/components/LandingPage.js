import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Javascript | React | Java | Spring | C# | .Net</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/radness" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* FreeCodeCamp */}
                                <a href="http://freecodecamp.org" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                                {/* FreeCodeCamp */}
                                <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;