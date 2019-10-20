import React, { Component } from 'react';
import '../styles/components/campaignCard.scss';
import '../styles/includes/boxShadowEffects.scss';

class CampaignCard extends Component {
    render() {
        return (
            <div className="campaign-wrapper">
                <div className="campaign-card effect7">
                    {
                        (this.props.taxBenefit) ? <div className="ribbon"><span>Tax Benefit</span></div> : ''
                    }
                    <div className="front">
                        <div className="top-pic" style={{backgroundImage: 'url(' + this.props.topPic + ')'}}></div>
                        <div className="avatar" style={{backgroundImage: 'url(' + this.props.avatar + ')'}}></div>
                        <div className="info-box">
                            <div className="info">
                                <h2>{this.props.title}</h2>
                                <span className="created-by">- created by {this.props.createdBy}</span>
                                <p className="intro">{this.props.intro}</p>
                                {(this.props.raised !== '') ? <span className="raised"><strong>&#8377; {this.props.raised}</strong> Raised</span> : ``}
                                {(this.props.supporters !== '') ? <span className="supporters"><strong>{this.props.supporters}</strong> Supporters</span> : ``}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CampaignCard;