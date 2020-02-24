import React from 'react'
import { css } from 'glamor'

const Loading = () => (
  <div {...css(styles.container)}>
    <div {...css(styles.logoWrapper)}>
      Diary
    </div>
  </div>
)

const styles = {
  container: {
    height: '100vh',  
    backgroundColor: '#2196F3'
  },
  logoWrapper: {
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: "#fff"
  }
}

export default Loading