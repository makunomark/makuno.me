import React from 'react'
import { graphql } from 'gatsby'
import { Tag, Avatar, Icon } from 'antd'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout activePage="home">
    <SEO title="Home" keywords={['mark', 'makuno', 'gachoka']} />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          maxWidth: 700,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        <Avatar size={150} icon="user" src={require('../images/marc.jpg')} />
        <h1 style={{ marginTop: 12, fontWeight: 'normal' }}>
          {data.site.siteMetadata.title}
        </h1>
        <div>
          <Tag color="geekblue">Software Engineer</Tag>
          <Tag color="geekblue">Open source</Tag>
          <Tag color="geekblue">Full Stack developer</Tag>
        </div>
        <p style={{ marginTop: 40 }}>
          I am a Mobile &amp; Web architect, from the city under the sun. I
          specialize in applications development. Currently, I work as a
          Software Engineer at{' '}
          <a href="https://twiga.ke" target="_blank">
            Twiga Foods
          </a>{' '}
          in Nairobi, Kenya.
        </p>
        <p style={{ marginTop: 12 }}>
          My core skills are Android <i>(Java, Kotlin &amp; XML)</i> and
          JavaScript{' '}
          <i>
            (React, React Native, Next.js, NodeJs &amp; most recently Gatsby)
          </i>
          . I am currently learning GoLang.
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/mark-makuno-188175100"
            target="_blank"
          >
            <Icon
              style={{ fontSize: 25, margin: 3, cursor: 'pointer' }}
              type="linkedin"
              theme="filled"
            />
          </a>
          <a href="https://github.com/makunomark" target="_blank">
            <Icon
              style={{ fontSize: 25, margin: 3, cursor: 'pointer' }}
              type="github"
              theme="filled"
            />
          </a>
          <a href="https://twitter.com/@thatmarc_" target="_blank">
            <Icon
              style={{ fontSize: 25, margin: 3, cursor: 'pointer' }}
              type="twitter"
            />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
