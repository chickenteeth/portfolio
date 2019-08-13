import React from 'react'
import Helmet from 'react-helmet'
import Work from '../components/Work'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
// import Gallery from '../components/Gallery'
import '../assets/scss/Work.module.scss'
import '../../public/static/resume.pdf'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.png'
import thumb04 from '../assets/images/thumbs/04.png'
import thumb05 from '../assets/images/thumbs/05.png'
import thumb06 from '../assets/images/thumbs/06.jpg'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Tristan Stutzman Portfolio'
    const siteDescription = 'A portfolio site to dispaly my work'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <h2>Recent Work</h2>
            <div className="projects">
              <Work
                name="Recipe Search"
                imgSrc={thumb05}
                desc="Recipe search using Food2Fork API"
                link="https://frosty-hopper-075632.netlify.com"
                source="https://github.com/thebeardly/recipes"
              />
              <Work
                name="Camp AZ"
                imgSrc={thumb01}
                desc="Arizona Camping review site made with BootStrap4, JavaScript, NodeJS/Express and MongoDB"
                link="https://thawing-gorge-99023.herokuapp.com/"
                source="https://github.com/thebeardly/camp_az"
              />
              <Work
                name="Beardly Robot"
                imgSrc={thumb02}
                desc="Blog made with ReactJS, GatsbyJS and Contentful CMS"
                link="https://beardlyblog.netlify.com/"
                source="https://github.com/thebeardly/gatsby-blog"
              />
              <Work
                name="RGB Color Guess Game"
                imgSrc={thumb03}
                desc="Try to pick the right color based on the RGB values given"
                link="https://js-color-game.netlify.com/"
                source="https://github.com/thebeardly/color_picker_gamez"
              />
              <Work
                name="Patatap Clone"
                imgSrc={thumb04}
                desc="Clone of the popular Patatap App made with PaperJS and HowlerJS libraries"
                link="https://ts-patatap-clone.netlify.com"
                source="https://github.com/thebeardly/patatap"
              />
            </div>
          </section>

          <section id="two">
            <h2>Get In Touch</h2>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        value="Send Message"
                        className="special sub-btn"
                      />
                    </li>
                    <li>
                      <a
                        href="https://app.box.com/s/281n1zvq446iwbbt1rjqmgvgx6rthpyt"
                        target="_blank"
                        className="button sub-btn"
                      >
                        View Resume
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Location</span>
                    </h3>
                    Gilbert, AZ
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:tstutzman@beardlysoft.com">
                      tstutzman@beardlysoft.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
