import React, { Component } from 'react'
import './Work.module.scss'

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
                <div className="Workcard-data">Description: {this.props.desc}</div>
                <div className="Workcard-data"><a href={this.props.source} target="_blank"><span className="icon fa-github"></span></a></div>
            </div>
        )
    }
}

export default Work;