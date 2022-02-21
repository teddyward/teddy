import React from "react"
import './about.css';
import '../index.css';


class About extends React.Component {

  render() {
    return <>
      <div className="text-3xl font-bold underline ml-10">
        Hey, I'm Teddy Ward
      </div>
      <div className="ml-20">
            This is my favorite color -> <div className="swatch"></div>
      </div>
    </>
  }
}

export default About;