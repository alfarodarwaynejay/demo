import React from 'react'
import { Paper } from 'react-md'

const About = () => (
  // <span>About</span>
  <div className='md-grid' style={{justifyContent: 'center'}}>
    <div className='md-cell--4'>
      <Paper
        key='paper'
        zDepth={3}
        className="papers__example"
      >
        <span>About</span>
      </Paper>
    </div>
  </div>
)

export default About
