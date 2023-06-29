import React from "react"
import '../../index.css';
import './factaboutme.css'

/**
 * One fact for the "About me" page.
 * Most facts have some similar patterns, but they may be rendered differently.
 */
class FactAboutMe extends React.Component {

    props = {
        fact: "",
        factDetail: ""
    }

    render() {
        let factDetail = <></>;
        if (this.props.factDetail) {
            factDetail = <div className="fact-detail">
                {this.props.factDetail}
            </div>
        }
        return (
            <div className="ml-20 fact-about-me">
                {this.props.children}
                {factDetail}
            </div>
        )
    }
}

export default FactAboutMe;