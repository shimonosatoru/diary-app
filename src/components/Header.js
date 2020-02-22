import React from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div {...css(styles.container)}>
        <Link to='/'>
          Chatt
        </Link>
      </div>
    )
  }
}

const styles = {
  container: {
    height: 55,
    backgroundColor: 'rgb(255, 235, 59)',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  logo: {
    height: 34,
    paddingLeft: 10
  }
}

export default Header