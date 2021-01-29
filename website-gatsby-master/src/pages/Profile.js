import { createBrowserHistory } from 'history';
import React from 'react'
import { graphql } from 'gatsby'

export const history = createBrowserHistory();

const  Profile=(props) =>{
  const searchValue=props.location.search.slice(1);
  const employeeData=props.data.markdownRemark.frontmatter.about.team.members.find(member=>member.key===searchValue);
  const {name,position, bio1,bio2,education,linkedin,photo}=employeeData
  return (
        <div>     
           <div className="module module--light module--modal module--team-modal module--modal-on" id={name}>
                      <div className="wrapper" >
                        <div className="module__content">
                          <h2 className="module__title aos-init">{name}</h2>
                          <span className="module__close-btn" onClick={()=>window.history.back()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                              <title>Close</title>
                              <g data-name="Layer 2">
                                <g>
                                  <path className="cls-1" d="M10,14.69.33,5.06,5.06.33,14.69,10l10-10L30,5.34l-10,10L29.72,25,25,29.72,15.31,20l-10,10L0,24.66Z"></path>
                                </g>
                              </g>
                            </svg>
                          </span>
                          <div className="module__member-img aos-init" style={{backgroundImage: `url(${photo.childImageSharp && photo.childImageSharp.fluid.src})`}}></div>
                          <p className="aos-init"></p>
                          <p>
                            <span>
                              <strong>{position}</strong>
                              <br /><br />
                              {bio1}
                              </span>
                          </p>
                          <p></p>
                          <dl className="data-list aos-init">
                            <div className="data-list__row">
                              <dt>Education</dt>
                              <dd>
                                <p>
                                  <span>{education}</span>
                                </p>
                              </dd>
                            </div>
                            <div className="data-list__row">
                              <dt>Linkedin</dt>
                              <dd>
                                <a className="link" target="_blank" rel="noopener noreferrer" href={linkedin}>View Profile</a>
                              </dd>
                            </div>
                          </dl>
                          <div className="quote aos-init">
                            <p>
                              <span>{bio2}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
        
        </div>
    )
}

export default Profile


export const pageQuery = graphql`
  query Profile {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
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
        }
      }
    }
  }
`
