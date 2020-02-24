import React from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div {...css(styles.container)}>
        <Link to='/' {...css(styles.logo)}>
          Diary
        </Link>
      </div>
    )
  }
}

const styles = {
  container: {
    height: 55,
    backgroundColor: '#2196F3',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    textDecoration: 'none'
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
    paddingLeft: '10px'
  }
}

export default Header