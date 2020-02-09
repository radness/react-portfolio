import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png"
                // src="img/avatar.png"
                alt="Yeonghoon Shin"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '1em'}}>Yeonghoon Shin</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hola, soy un desarrollador jugando y comiendo en Corea.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>82-10-4090-2439</p>
            <h5>Email</h5>
            <p>yhs5128@gmail.com</p>
            <h5>Github</h5>
            <p>https://github.com/radness</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>History</h2>
            <Education
              startYear={2009.03}
              endYear={2015.08}
              schoolName="Hongik University"
              schoolDescription="Computer Information Communication Engineering"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Experience</h2>
            <Experience
              startYear={2015.08}
              endYear={2020}
              jobName="Miracom I&C"
              jobDescription="MES Application Developer"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <Skills
              skill="Java"
              progress={80}
            />
            <Skills
              skill="React"
              progress={50}
            />
            <Skills
              skill="Javascript"
              progress={50}
            />
            <Skills
              skill="C#"
              progress={30}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;