import React from 'react'
import {
  List,
  Paper,
  FontIcon,
  ListItem,
} from 'react-md'

const About = () => (
  <div className='md-grid' style={{justifyContent: 'center'}}>
    <div className='md-cell--8'>
      <Paper
        key='paper'
        zDepth={3}
        className="papers__example md-grid"
      >
        <h1 className='demo__header'>Customer Database</h1>
        <h3 id='about-info'>
        A demo app for the take-home assignment.
        </h3>

        <div className='md-cell--12 about_sub__header'>
          <h3>Technical requirements:</h3>
          <List className="md-cell--center">
          `<ListItem
              leftIcon={<FontIcon>star</FontIcon>}
              primaryText='Axios'
            />
            <ListItem
              leftIcon={<FontIcon>star</FontIcon>}
              primaryText='React'
            />
            <ListItem
              leftIcon={<FontIcon>star</FontIcon>}
              primaryText='React-Router'
            />
            <ListItem
              leftIcon={<FontIcon>star</FontIcon>}
              primaryText='Redux & Redux-Saga'
            />
            <ListItem
              leftIcon={<FontIcon>star</FontIcon>}
              primaryText='Webpack'
            />
          </List>
        </div>
        <h4 id='about-info-h4'>
        Limitation: non-responsive.
        </h4>
      </Paper>
    </div>
  </div>
)

export default About
