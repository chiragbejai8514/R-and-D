import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'

import './index-page.css'

//created by me
import IndexPageTemplate from './index-page-template'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showNavbar: true,
      showLearnMore: false,
      hideModal: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('hashchange', this.handleHashChange)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    window.removeEventListener('hashchange', this.handleHashChange)
  }

  handleKeyDown = (e) => {
    if (e.code === 'Backspace' || e.code === 'Escape') {
      this.setState({
        hideModal: this.state.hideModal + 1,
        showLearnMore: false,
      })
    }
  }  

  handleHashChange = (e) => {
    this.setState({
      hideModal: this.state.hideModal + 1,
    })
  }

  render() {
    const { data } = this.props
    const { showLearnMore, hideModal } = this.state
    const { frontmatter } = data.markdownRemark

    return (<>
      <Layout showNavbar={this.state.showNavbar}>
        <IndexPageTemplate
          hideModal={hideModal}
          data={frontmatter}
          showNavbar={ (showNavbar) => this.setState({ showNavbar }) }
          showLearnMore={ () => this.setState({ showLearnMore: true }) }
        />
      </Layout>
      <div className={`modal ${showLearnMore ? 'modal--in' : ''}`} id="doc-modal">
        <div className="modal__scroll-container">
          <div className="wrapper">
            <div className="modal__body">
              {frontmatter.paperwork.map(paperwork => (<div className={`doc-section ${paperwork.imageAlign || ''}`} id={paperwork.id} key={paperwork.id}>
                <ReactMarkdown source={paperwork.content} />
              </div>))}
            </div>
            <div className="modal__aside">
              <button className="modal__aside-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs></defs><title>Get_In_Touch_Close_CTA</title><g data-name="Layer 2"><g><path class="cls-1" d="M10,14.69.33,5.06,5.06.33,14.69,10l10-10L30,5.34l-10,10L29.72,25,25,29.72,15.31,20l-10,10L0,24.66Z"></path></g></g></svg>
              </button>
              <ul className="module__nav module__nav--modal module__nav--light">
                <li className="module__nav-item active">
                  <a className="module__nav-link" href="#edge-supercomputing">Edge Supercomputing</a>
                </li>
                <li className="module__nav-item">
                  <a className="module__nav-link" href="#executive-summary">Executive Summary</a>
                </li>
                <li className="module__nav-item">
                  <a className="module__nav-link" href="#introduction">Introduction</a>
                </li>
                <li className="module__nav-item module__nav-item--sub">
                  <a className="module__nav-link" href="#heter-compute">The Problem: Heterogeneous Compute</a>
                </li>
                <li className="module__nav-item module__nav-item--sub">
                  <a className="module__nav-link" href="#unified-compute">The Solution: Unified Compute</a>
                </li>
                <li className="module__nav-item">
                  <a className="module__nav-link" href="#software-ecosystem">Software Ecosystem</a>
                </li>
                <li className="module__nav-item module__nav-item--sub">
                  <a className="module__nav-link" href="#unified-software">Unified Software</a>
                </li>
                <li className="module__nav-item module__nav-item--sub">
                  <a className="module__nav-link" href="#computer-vision-image-histograms">Computer Vision: Image Histograms</a>
                </li>
                <li className="module__nav-item module__nav-item--sub">
                  <a className="module__nav-link" href="#deep-neural-networks-resnet-50">Deep Neural Networks: RESNET 50</a>
                </li>
                <li className="module__nav-item module__nav-item--sub">
                  <a className="module__nav-link" href="#full-robot-application-sense-and-control">Full Robot Application: Sense and Control</a>
                </li>
                <li className="module__nav-item">
                  <a className="module__nav-link" href="#hardware-ecosystem">Hardware Ecosystem</a>
                </li>
                <li className="module__nav-item module__nav-item--sub">
                  <a className="module__nav-link" href="#quadric-supercomputer">Quadric Supercomputer</a>
                </li>
                <li className="module__nav-item module__nav-item--sub">
                  <a className="module__nav-link" href="#quadric-processor-array-and-core">Quadric Processor, Array, and Core</a>
                </li>
                <li className="module__nav-item">
                  <a className="module__nav-link" href="#applications">Applications</a>
                </li>
                <li className="module__nav-item">
                  <a className="module__nav-link" href="#conclusion">Conclusion</a>
                </li>
                <li className="module__nav-item permanent-active">
                  <a className="module__nav-link" data-toggle="modal" data-menuanchor="investors" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>)
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        images {
          id
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        technology {
          overview {
            title
            description
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          benefits {
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            description
            heading1
            heading2
            heading3
            content1
            content2
            content3
          }
          industries {
            description
          }
        }
        about {
          team {
            description
            members {
              key
              name
              position
              pinToTop
              bio1
              bio2
              education
              linkedin
              photo{
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              thumbPhoto {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
          overview {
            content
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
        investors {
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          website
          name
          lg {
            x
            y
            width
            height
          }
          md {
            x
            y
            width
            height
          }
          sm {
            x
            y
            width
            height
          }
          xs {
            x
            y
            width
            height
          }
        }
        joinOurTeam {
          title
          description
          whatWeHave
          whatWeExpect
          ourGoal
          photos {
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            lg {
              x
              y
              width
              height
            }
            md {
              x
              y
              width
              height
            }
            sm {
              x
              y
              width
              height
            }
            xs {
              x
              y
              width
              height
            }
          }
        }
        paperwork {
          content
          id
          imageAlign
        }
      }
    }
  }
`