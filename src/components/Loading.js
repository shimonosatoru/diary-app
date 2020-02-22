import React from 'react'
import { css } from 'glamor'

const Loading = () => (
  <div {...css(styles.container)}>
    <div {...css(styles.logoWrapper)}>
      Chatt
    </div>
  </div>
)

const styles = {
  container: {
    height: '100vh',  
    backgroundColor: 'rgb(255, 235, 59)'
  },
  logoWrapper: {
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 60,
    width: 255
  }
}

export default Loading