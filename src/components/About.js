import React from 'react'
import {
  List,
  Paper,
  FontIcon,
  ListItem,
} from 'react-md'
import { requirements, link } from '../defaults'

const About = () => (
  <div className='md-grid' style={{justifyContent: 'center'}}>
    <div className='md-cell--8'>
      <Paper
        key='paper'
        zDepth={3}
        className="papers__example md-grid"
      >
        <h1 className='demo__header'>Customer Portal</h1>
        <h3 id='about-info'>
        A demo app for the take-home assignment.
        </h3>

        <div className='md-cell--12 about_sub__header'>
          <h3>Technical requirements:</h3>
          <List className="md-cell--center">
            {requirements.map(req => (
              <ListItem
                key={req}
                primaryText={req}
                leftIcon={<FontIcon>star</FontIcon>}
                onClick={() => window.open(link[req], '_blank')}
              />
            ))}
          </List>
        </div>
        <h4 id='about-info-h4'>
        Limitations: non-responsive, basic css.
        </h4>
      </Paper>
    </div>
  </div>
)

export default About
