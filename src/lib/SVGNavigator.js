import React from "react"
import '../index.css';

// var Snap = require('legacy-loader?exports=Snap!snapsvg');
// var mina = require('legacy-loader!snapsvg').mina;
// window.Snap = SnapLib.Snap;
var Snap = window.Snap
var mina = window.mina

/* <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js"></script> */


class SVGNavigator extends React.Component {
  PAC_RADIUS = window.innerHeight * 0.05

  getOpenPacSVG(pacRadius) {
    return (
      "M 100 50 " +
      `A ${pacRadius} ${pacRadius}, 0, 1, 0, 100 ${50 + pacRadius} ` +
      `L ${100 - pacRadius} ${50 + pacRadius/2} Z`
    )
  }

  animateOpenPac(svg, pacRadius) {
    svg.animate(
      {
        d: this.getOpenPacSVG(pacRadius)
      },
      250,
      (n) => Math.pow(n, 4),
      () => this.animateClosedPac(svg, pacRadius)
    )
  }

  getClosedPacSVG(pacRadius) {
    return (
      `M 103 ${50 + pacRadius/2} ` +
      `A ${pacRadius} ${pacRadius}, 0, 1, 0, 103 ${51 + pacRadius/2} Z`
    )
  }

  animateClosedPac(svg, pacRadius) {
    svg.animate(
      {
        d: this.getClosedPacSVG(pacRadius)
      },
      250,
      (n) => Math.pow(n, 4),
      () => this.animateOpenPac(svg, pacRadius)
    )
  }

  pulse(group, circleRadius) {
    group.animate({r: circleRadius * .98}, 2000, (v) => v, ()=>this.grow(group, circleRadius));
  }

  grow(group, circleRadius) {
    group.animate({r: circleRadius * 1.02}, 2000, (v) => v, ()=>this.pulse(group, circleRadius));
  }

  addPacman(snapSVG, circleRadius) {
    const pacRadius = circleRadius / 2
    // console.log(pacRadius)
    // const mina = SnapLib.mina
    const pacman = snapSVG.path(
      this.getOpenPacSVG(pacRadius)
    ).attr({
      fill: "#F7F700",
      stroke: "#000",
      strokeWidth: 1
    })
    this.animateClosedPac(pacman, pacRadius)

    snapSVG.mousemove((e) => {
      // ANIMATE PAC MAN
      const pacBox = pacman.getBBox()
      const pacX = pacBox.cx
      const pacY = pacBox.cy
      const mouseX = e.layerX - circleRadius
      const mouseY = e.layerY - circleRadius
      const distance = Math.sqrt(
        Math.pow(pacX - mouseX, 2) + 
        Math.pow(pacY - mouseY, 2)
      )
      const VELOCITY = .3 // pixels per second
      const time = distance / VELOCITY

      pacman.animate({
        transform: `T${mouseX},${mouseY}`
      }, time)

      // DRAW DOTS
    })
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

    const aboutCirclePosition = 10 + circleRadius/2


    // const closedPacMan = snapSVG.path(
    //   "M 100 50 " +
    //   `A ${pacRadius} ${pacRadius}, 0, 1, 0, 100 ${50 + pacRadius} Z`
    // )
    // const closedPacMan = snapSVG.path(
    //   "M 100 50 " +
    //   `A ${pacRadius} ${pacRadius}, 0, 1, 0, 100 ${50 + pacRadius} ` +
    //   `L ${100 - pacRadius} ${50 + pacRadius/2} Z`
    // );

    // const pacman = snapSVG.circle(aboutCirclePosition, aboutCirclePosition, circleRadius/2);
    // pacman.attr({
    //   fill: "#F7F700",
      // stroke: "#000",
      // strokeWidth: 1
    // })
    this.addPacman(snapSVG, circleRadius)
  

    const mapsCircleX = width / 2
    const mapsCircleY = aboutCirclePosition + (2.5 * circleRadius)
    const mapsCircle = snapSVG.circle(mapsCircleX, mapsCircleY, circleRadius)
    mapsCircle.attr({
      fill: "#219498",
      opacity: 0.4
    });

    const blogCircleX = width / 2 - circleRadius - 10
    const blogCircleY = aboutCirclePosition + (4.5 * circleRadius)
    const blogCircle = snapSVG.circle(blogCircleX, blogCircleY, circleRadius)
    blogCircle.attr({
      fill: "#73628A",
      opacity: 0.4
    })
    // this.pulse(blogCircle, circleRadius)

    const statsCircleX = width / 2 + circleRadius + 10
    const statsCircleY = aboutCirclePosition + (4.5 * circleRadius)
    const statsCircle = snapSVG.circle(statsCircleX, statsCircleY, circleRadius)
    statsCircle.attr({
      fill: "#EBBAB9",
      opacity: 0.5
    })
    
    // const centerCircles = snapSVG.group(mapsCircle, blogCircle, statsCircle)
    // centerCircles.forEach((circle) => {
      
    // })
    const circles = [mapsCircle, blogCircle, statsCircle]
    circles.forEach((circle) => {
      this.pulse(circle, circleRadius)
    })
    // .map((circle) => {
    //   
    // })
    // this.rotate(180, centerCircles, width, circleRadius)
    // setInterval(() => {

    // }, 10000) 
    // snapSVG.attr({"viewBox": "0 0 850 640"})
  }

  render() {
    return <>
      <svg id="svg" className="h-screen w-full"></svg>
    </>
  }
}

export default SVGNavigator;