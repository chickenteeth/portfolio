import React from 'react'
import Helmet from 'react-helmet'
import Work from '../components/Work'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
// import Gallery from '../components/Gallery'
import '../assets/scss/Work.module.scss'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.png'
import thumb04 from '../assets/images/thumbs/04.png'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'



class HomeIndex extends React.Component {
    render() {
        const siteTitle = "Tristan Stutzman Portfolio"
        const siteDescription = "A portfolio site to dispaly my work"

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
                                name="Camp AZ"
                                imgSrc={thumb01}
                                desc="Arizona Camping review site made with JavaScript, and NodeJS"
                                link="https://thawing-gorge-99023.herokuapp.com/"
                                source="https://github.com/thebeardly/camp_az"
                            />
                            <Work
                                name="Camp AZ"
                                imgSrc={thumb02}
                                desc="Arizona Camping review site made with JavaScript, and NodeJS"
                                link="https://thawing-gorge-99023.herokuapp.com/"
                                source="https://github.com/thebeardly/camp_az"
                            />
                            <Work
                                name="Camp AZ"
                                imgSrc={thumb03}
                                desc="Arizona Camping review site made with JavaScript, and NodeJS"
                                link="https://thawing-gorge-99023.herokuapp.com/"
                                source="https://github.com/thebeardly/camp_az"
                            />
                            <Work
                                name="Camp AZ"
                                imgSrc={thumb04}
                                desc="Arizona Camping review site made with JavaScript, and NodeJS"
                                link="https://thawing-gorge-99023.herokuapp.com/"
                                source="https://github.com/thebeardly/camp_az"
                            />
                        </div>
                    </section>

                    <section id="two">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
                                    <div className="row uniform 50%">
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="contact" />
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" className="special" /></li>
                                    <li><a href="https://github.com/thebeardly" target="_blank" className="button taco">View Resume</a></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Location</span></h3>
                                        Gilbert, AZ<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:tstutzman@beardlysoft.com">tstutzman@beardlysoft.com</a>
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