import React from 'react'
import { graphql } from 'gatsby'
import { Tag, Avatar, Icon } from 'antd'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
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
            {data.site.siteMetadata.title || ''}
          </h1>
          <div>
            {data.allHighlights.edges.map(edge => (
              <Tag color="geekblue">{edge.node.highlight}</Tag>
            ))}
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
            . I am, at the moment, learning GoLang.
          </p>
          <p style={{ marginTop: 12 }}>
            Here's a link to my <a href={'https://drive.google.com/open?id=1VFM5L0qv5uS6Wo8uVg-RAYm3qe328oVI'} target='_blank'>Resume/Curriculum Vitae</a>
          </p>
          <div>
            {data.allSocialMediaLinks.edges.map(edge => (
              <a href={edge.node.link} target="_blank">
                <Icon
                  style={{ fontSize: 25, margin: 3, cursor: 'pointer' }}
                  type={edge.node.icon}
                  theme={edge.node.theme}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allHighlights {
      edges {
        node {
          highlight
          id
        }
      }
    }
    allSocialMediaLinks {
      edges {
        node {
          icon
          link
          theme
        }
      }
    }
  }
`
