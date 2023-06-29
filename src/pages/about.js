import React, { useEffect } from "react"
import './about.css';
import '../index.css';
import FactAboutMe from '../lib/about/factaboutme'
import FiveMinuteMap from '../lib/about/fiveminutemap'

/**
 * A fun about page 
 */
class About extends React.Component {

  FIRST_DAY_CODING = new Date(2008, 9, 1);
  DATE_OF_BIRTH = new Date(1994, 4, 14);

  constructor(props) {
    super(props);
    this.state = {
      codingLife: 0,
      currentDate: new Date()
    }
    setInterval(() => {
      this.setState({
        codingLife: this.calculatePercentOfLifeInCode(),
        currentDate: new Date()
      })
    }, 10);
  }

  /**
   * some division :)
   * @returns {number} The percentage of my life I've been coding
   */
  calculatePercentOfLifeInCode() {
    let codingLife = this.state.currentDate - this.FIRST_DAY_CODING;
    let totalLife = this.state.currentDate - this.DATE_OF_BIRTH;
    return (codingLife / totalLife * 100).toFixed(8)
  }

  render() {
    return <>
      <div className="text-3xl font-bold underline ml-10">
        Hey, I'm Teddy Ward
      </div>
      <FactAboutMe
        factDetail={
          "I LOVE working with color but this one is a bit garish for most professional work. " +
          "So I had to find a way to squeeze it in here."
        }
      >
        This is my favorite color -> <div className="swatch"></div>
      </FactAboutMe>
      <FactAboutMe
        factDetail={
          "I do agility training with my dog; I love to drive; I played college rugby"
        }
      >
        Two truths and a lie:
      </FactAboutMe>
      <FactAboutMe
        factDetail="There was a big party here when this passed 50%"
      >
        I've been coding for {this.state.codingLife}% of my life
      </FactAboutMe>
      <FactAboutMe
        factDetail={
          "But lots of my work is proprietary :("
        }
      >
        I specialize in data visualization and map making
      </FactAboutMe>
      <FactAboutMe
        factDetail={
          <FiveMinuteMap></FiveMinuteMap>
        }
      >
        Here's an example of something I can make in five minutes. It's a map that shows your location and mine.
      </FactAboutMe>
    </>
  }
}

export default About;