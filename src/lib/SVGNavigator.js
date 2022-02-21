import React from "react"
import Pacman from "./Pacman";
import '../index.css';

var Snap = window.Snap

class SVGNavigator extends React.Component {

  CIRCLE_RADIUS = window.innerHeight * 0.1;


  pulse(group, circleRadius) {
    group.animate({r: circleRadius * .98}, 2000, (v) => v, ()=>this.grow(group, circleRadius));
  }

  grow(group, circleRadius) {
    group.animate({r: circleRadius * 1.02}, 2000, (v) => v, ()=>this.pulse(group, circleRadius));
  }

  /**
   * Creates
   * @param {Snap} canvas Snap SVG paper 
   * @param {Number} x X location (relative to the canvas 0,0) at which to add the circle
   * @param {Number} y Y location (relative to the canvas 0,0) at which to add the circle
   * @param {String} color Fill color of the circle
   * @param {String} label Label for the circle, which will also be a link
   * @returns 
   */
  addCircle(canvas, x, y, color, label) {
    const circle = canvas.circle(0, 0, this.CIRCLE_RADIUS)
    circle.attr({
      fill: color,
      opacity: 0.4
    }).click(() => window.location=`/${label.toLocaleLowerCase()}`);
    const aboutText = canvas.text(0, 5, label).attr({
      "text-anchor": "middle",
      opacity: 0.7
    })
    const group = canvas.group(circle, aboutText)
    group.transform(`translate(${x} ${y})`)
    circle.append(Snap.parse(`<title>${label}</title>`))
    return circle
  }

  // rotate(rotation, centerCircles, width, circleRadius) {
  //   const bbox = centerCircles.getBBox()
  //   centerCircles.animate({
  //     transform: `t100 100 r180`
  //   }, 1000, (v) => v, () => this.rotate(-360, centerCircles, bbox.cx, bbox.cy))
  // }

  /**
   * Make a bunch of circles :)
   */
  componentDidMount() {
    const snapSVG = new Snap('#svg')
    const height = window.innerHeight;
    const width = window.innerWidth;
    const circleRadius = height * .1;

    // const blur = snapSVG.filter(Snap.filter.blur(5, 5));
    // filter: blur,

    const mapsCircle = this.addCircle(
      snapSVG, width/2, 2*circleRadius, "#219498", "About")
    // width/2, 2*circleRadius
    // mapsLink.add(snapSVG.text(0, 100, "I'm a link"))
    const blogCircle = this.addCircle(
      snapSVG, width/2 - circleRadius - 10, 4*circleRadius, "#EBBAB9", "Blog?")
    const circles = [mapsCircle, blogCircle]
    circles.forEach((circle) => {
      this.pulse(circle, circleRadius)
    })
  }

  render() {
    return <>
      <svg id="svg" className="h-screen w-full"></svg>
      <Pacman
        radius={this.CIRCLE_RADIUS}
        x={window.innerWidth/2 + 2*this.CIRCLE_RADIUS + 10}
        y={3.5*this.CIRCLE_RADIUS}
      ></Pacman>
    </>
  }
}

export default SVGNavigator;