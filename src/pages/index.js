import React from "react"
import SVGNavigator from "../lib/SVGNavigator";
import '../index.css';


class Home extends React.Component {

  render() {
    return <>
      <div className="text-3xl font-bold underline ml-10">
        Teddy Ward
      </div>
      <SVGNavigator></SVGNavigator>
    </>
  }
}

export default Home;