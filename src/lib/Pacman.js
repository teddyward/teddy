import PropTypes from 'prop-types';
import React from "react"
import '../index.css';

let IS_BROWSER = typeof window !== "undefined"
let Snap;
if (IS_BROWSER) {
    Snap = require('legacy-loader?exports=Snap!snapsvg');
    window.Snap = Snap;
}


class Pacman extends React.Component {
  PAC_RADIUS = IS_BROWSER ? window.innerHeight * 0.05 : 25;

  constructor(props) {
    super(props);
    this.state = {canvas: null, pacman: null};
  }


  /**
   * Gets an SVG representing the shape of a Pacman with its mouth open
   * @param {Number} pacRadius Size of the Pacman
   * @returns A description of an SVG path
   */
  static getOpenPacSVG(pacRadius, x=100, y=50) {
    return (
      `M ${x} ${y} ` +
      `A ${pacRadius} ${pacRadius}, 0, 1, 0, ${x} ${y + pacRadius} ` +
      `L ${x - pacRadius} ${y + pacRadius/2} Z`
    )
  }

  /**
   * Changes some path into a pacman with an open mouth
   * This will probably look pretty weird if the `svg` you pass in
   * is not a Pacman with a closed mouth.
   * @param {Snap} svg An SVG element
   * @param {Number} pacRadius The size of the pacman
   */
  animateOpenPac(svg, pacRadius, x=103, y=50) {
    svg.animate(
      {
        d: Pacman.getOpenPacSVG(pacRadius, x, y)
      },
      250,
      (n) => Math.pow(n, 4),
      () => this.animateClosedPac(svg, pacRadius, x, y)
    )
  }

  /**
   * Gets an SVG representing the shape of a Pacman with its mouth closed
   * @param {Number} pacRadius Size of the Pacman
   * @returns A description of an SVG path
   */
  getClosedPacSVG(pacRadius, x=103, y=50) {
    return (
      `M ${x} ${y + pacRadius/2} ` +
      `A ${pacRadius} ${pacRadius}, 0, 1, 0, ${x} ${y + 1 + pacRadius/2} Z`
    )
  }

  /**
   * Changes some path into a pacman with an closed mouth
   * This will probably look pretty weird if the `svg` you pass in
   * is not a Pacman with an open mouth.
   * @param {Snap} svg An SVG element
   * @param {Number} pacRadius The size of the pacman
   */
  animateClosedPac(svg, pacRadius, x=103, y=50) {
    svg.animate(
      {
        d: this.getClosedPacSVG(pacRadius, x, y)
      },
      250,
      (n) => Math.pow(n, 4),
      () => this.animateOpenPac(svg, pacRadius, x, y)
    )
  }

  startAnimatingPacman(pacman) {
    this.animateClosedPac(pacman, this.props.radius / 2, this.props.x, this.props.y)

    this.state.canvas.mousemove((e) => {
      // ANIMATE PAC MAN
      const pacBox = pacman.getBBox()
      const pacX = pacBox.cx
      const pacY = pacBox.cy
      const mouseX = e.layerX - this.props.x + this.props.radius / 2
      const mouseY = e.layerY - this.props.y
      const distance = Math.sqrt(
        Math.pow(pacX - mouseX, 2) + 
        Math.pow(pacY - mouseY, 2)
      )
      const VELOCITY = 1 // pixels per second
      const time = distance / VELOCITY

      pacman.animate({
        transform: `T${mouseX},${mouseY}`
      }, time)

      // DRAW DOTS
    })
  }

  /**
   * Adds a pacman to the active Snap SVG canvas
   * @param {Number} circleRadius The size of the Pac-man
   */
  addPacman(circleRadius, canvas) {
    const pacRadius = circleRadius / 2
    // console.log(pacRadius)
    // const mina = SnapLib.mina
    const pacman = canvas.path(
      Pacman.getOpenPacSVG(pacRadius * 2, this.props.x, this.props.y)
    ).attr({
      fill: "#F7F700",
      stroke: "#000",
      strokeWidth: 1,
      opacity: 0.4
    }).click(() => this.startAnimatingPacman(pacman))
    this.setState({pacman})
  }

  // rotate(rotation, centerCircles, width, circleRadius) {
  //   const bbox = centerCircles.getBBox()
  //   centerCircles.animate({
  //     transform: `t100 100 r180`
  //   }, 1000, (v) => v, () => this.rotate(-360, centerCircles, bbox.cx, bbox.cy))
  // }

  /**
   * Adds a Pac-man to the canvas :)
   * Assumes that there is an #svg element already existing.
   */
  componentDidMount() {
    const snapSVG = new Snap('#svg')
    this.setState({
        canvas: snapSVG
    })

    this.addPacman(this.props.radius, snapSVG)
  }

  render() {
    return <></>
  }
}

Pacman.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    radius: PropTypes.number
}

export default Pacman;