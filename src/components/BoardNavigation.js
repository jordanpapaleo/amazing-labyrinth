import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class BoardNavigation extends PureComponent {
  static propTypes = {
    size: PropTypes.number.isRequired,
    cb: PropTypes.func.isRequired
  }

  handleClick = (pos, i) => (se) => {
    this.props.cb(pos, i)
  }

  render () {
    const {size} = this.props

    return (
      <div style={styles.navWrapper} className='boardNavigation-component'>
        <nav style={{...styles.horizontalNav, top: 0}}>
          {[...Array(size)].map((e, i) => <a onClick={this.handleClick('top', i)} style={styles.horizontalLink} key={i}>{i}</a>)}
        </nav>

        <nav style={{...styles.horizontalNav, bottom: 0}}>
          {[...Array(size)].map((e, i) => <a onClick={this.handleClick('bottom', i)} style={styles.horizontalLink} key={i}>{i}</a>)}
        </nav>

        <nav style={{...styles.verticalNav, left: 0}}>
          {[...Array(size)].map((e, i) => <a onClick={this.handleClick('left', i)} style={styles.verticalLinks} key={i}>{i}</a>)}
        </nav>

        <nav style={{...styles.verticalNav, right: 0}}>
          {[...Array(size)].map((e, i) => <a onClick={this.handleClick('right', i)} style={styles.verticalLinks} key={i}>{i}</a>)}
        </nav>
      </div>
    )
  }
}

const baseNav = {
  flex: 1,
  border: '1px solid hotpink',
  position: 'absolute',
  display: 'flex'
}

const baseLink = {
  color: 'blue',
  cursor: 'pointer'
}

const styles = {
  navWrapper: {
    border: '1px solid orange',
    display: 'flex',
    position: 'absolute',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  },
  verticalNav: {
    ...baseNav,
    flexDirection: 'column',
    top: 50,
    bottom: 50
  },
  horizontalNav: {
    ...baseNav,
    flexDirection: 'row',
    left: 50,
    right: 50
  },
  horizontalLink: {
    ...baseLink,
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center'
  },
  verticalLinks: {
    ...baseLink,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
}
