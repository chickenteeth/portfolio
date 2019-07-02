import React from 'react'
import Helmet from 'react-helmet'
import Work from '../components/Work'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
// import Gallery from '../components/Gallery'
import '../components/Work.module.scss'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.png'
import thumb04 from '../assets/images/thumbs/04.png'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Camp AZ', description: 'Campsite review made with JavaScript and NodeJS' },
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Beardly Robot', description: 'Robotics blog made with React and Gatsby JS' },
    { id: '3', src: full03, thumbnail: thumb03, caption: 'RGB Color Guessing', description: 'Made with JavaScript and CSS' },
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Patatap Clone', description: 'Clone of Patatap made with Howler JS and Paper JS' },
    // { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    // { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' }
];

class HomeIndex extends React.Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         lightboxIsOpen: false,
    //         currentImage: 0,
    //     };

    //     this.closeLightbox = this.closeLightbox.bind(this);
    //     this.gotoNext = this.gotoNext.bind(this);
    //     this.gotoPrevious = this.gotoPrevious.bind(this);
    //     this.openLightbox = this.openLightbox.bind(this);
    //     this.handleClickImage = this.handleClickImage.bind(this);
    // }

    // openLightbox(index, event) {
    //     event.preventDefault();
    //     this.setState({
    //         currentImage: index,
    //         lightboxIsOpen: true,
    //     });
    // }
    // closeLightbox() {
    //     this.setState({
    //         currentImage: 0,
    //         lightboxIsOpen: false,
    //     });
    // }
    // gotoPrevious() {
    //     this.setState({
    //         currentImage: this.state.currentImage - 1,
    //     });
    // }
    // gotoNext() {
    //     this.setState({
    //         currentImage: this.state.currentImage + 1,
    //     });
    // }
    // handleClickImage() {
    //     if (this.state.currentImage === this.props.images.length - 1) return;

    //     this.gotoNext();
    // }

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

                    {/* <section id="one">
                        <header className="major">
                            <h2>Ipsum lorem dolor aliquam ante commodo<br />
                                magna sed accumsan arcu neque.</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section> */}

                    <section id="one">
                        <h2>Recent Work</h2>

                        <Work
                            name="Camp AZ"
                            imgSrc={thumb01}
                            desc="Arizona Camping review site made with JavaScript, and NodeJS"
                            link="https://thawing-gorge-99023.herokuapp.com/"
                            source="https://github.com/thebeardly/camp_az"
                        />

                        {/* <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} /> */}

                        <ul className="actions">
                            <li><a href="https://github.com/thebeardly" target="_blank" className="button">View Github</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Location</span></h3>
                                        Gilbert, AZ<br />
                                        United States
                                    </li>
                                    {/* <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li> */}
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