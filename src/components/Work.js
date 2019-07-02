import React, { Component } from 'react'
import '../assets/scss/Work.module.scss'

class Work extends Component {
    render() {
        return (
            <div className="Workcard">
                <div className="Workcard-image">
                    <a href={this.props.link} target="_blank">
                        <img src={this.props.imgSrc} alt={this.props.name} />
                    </a>
                </div>
                <h2 className="Workcard-title">{this.props.name}</h2>
                <div className="Workcard-desc">Description: {this.props.desc}</div>
                <div className="Workcard-source"><a href={this.props.source} target="_blank"><i class="fab fa-github"></i></a></div>
            </div>
        )
    }
}

export default Work;