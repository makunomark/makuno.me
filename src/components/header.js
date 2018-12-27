import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, activePage }) => (
  <div
    style={{
      background: 'rgb(250, 250, 250)',
      borderBottom: '1px solid rgb(242, 242, 242)',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        display: 'flex',
        justifyContent: 'center',
        padding: '1.2rem 1.0875rem',

      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'rgb(102, 102, 102)',
            textDecoration: 'none',
            fontWeight: 'normal',
          }}
        >
          {siteTitle.toUpperCase()}
        </Link>
      </h4>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
