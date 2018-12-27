import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Layout as AntLayout } from 'antd'

import MyHeader from './header'
import './layout.css'

const { Header, Content, Footer } = AntLayout

const Layout = ({ children, activePage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AntLayout>
        <Header
          style={{
            background: 'rgb(250, 250, 250)',
            height: 'auto',
          }}
        >
          <MyHeader
            siteTitle={data.site.siteMetadata.title}
            activePage={activePage}
          />
        </Header>
        <Content style={{ minHeight: '85vh', background: 'white' }}>
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            background: 'rgb(250, 250, 250)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <span>Mark Makuno ©2018</span>{' '}
          <span>
            Design inspired by{' '}
            <a href="https://www.vauxlab.com/">Thijs Koerselman's Site</a>
          </span>
        </Footer>
      </AntLayout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
