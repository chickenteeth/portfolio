import React, { Component } from 'react'
import '../assets/scss/Work.module.scss'

class Work extends Component {
    render() {
        return (
            <div className="Workcard">
                <div className="Workcard-image">
                    <a href={this.props.link} target="_blank">
                        <img src={this.props.imgSrc} alt={this.props.name} className="proj-thumb" />
                    </a>
                </div>
                <h2 className="Workcard-title">{this.props.name}</h2>
                <div className="Workcard-desc">{this.props.desc}</div>
                <div className="Workcard-source"><a href={this.props.source} target="_blank" className="icon fa-github"></a></div>
            </div>
        )
    }
}

export default Work;