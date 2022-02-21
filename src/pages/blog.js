import React from "react"
import '../index.css';
import PostPreview from '../lib/blog/postpreview'


class About extends React.Component {

  render() {
    return <>
        <div className="w-full h-screen">
            <div className="w-full text-3xl font-bold underline ml-10">
                Here's some stuff I've worked on and/or thoughts I've had
            </div>
            <div className="w-full text-l ml-20 italic">
                I haven't decided yet if it will actually be a blog
            </div>
            <PostPreview
                title="Making this website"
                subtitle={
                    "Musings on my experiences with Snap.svg, Gatsby, and Tailwind"
                }
                link="/blog/website"
                thumbnail="/pacman.png"
            ></PostPreview>
            <PostPreview
                title="Career Progression"
                subtitle={
                    "When working on performance reviews this quarter, I at first " + 
                    "found it very difficult to be consistent. My team is getting bigger, which means that " +
                    "if I spent my self-mandated 1.5 hours per report on each review, it was going to span  " +
                    "multiple days. This introduces bias: the mood that I'm in on a given day could minorly " +
                    "shift my reviews. So, as a prerequisite to writing _any_ reviews, " +
                    "I wanted to create a progression framework. To my great joy, the engineers at Monzo had already " +
                    "created one, so I just had to fork it, and write new content :)"
                }
                link="https://kevala-progression.herokuapp.com/"
                thumbnail="/progression.png"
            >
            </PostPreview>
            <PostPreview
                title="Methane Map"
                subtitle={
                    "This is something I started and really need to get back to. " +
                    "The idea is basically that it draws on data from Prof. Drew Shindell's " +
                    "methane research in order to let you see the impacts of various mitigation " +
                    "strategies. Ideally, this would result in real change when presented at the UN."
                }
                link="https://methane-map.herokuapp.com/"
                thumbnail="/methanemap.png"
            >
            </PostPreview>
            <PostPreview
                title="Wedding Planning :)"
                subtitle={
                    "I'm extremely stubborn and refused to use a service like Zola to " +
                    "host our wedding website. It is obviously inefficient and time-consuming to " +
                    "do it myself, but it was also really fun and cute to pick out fonts and colors " +
                    "and make little things like the timeline tool and the map of Durham :)"
                }
                link="http://www.louandteddy.com/"
                thumbnail="/louandteddy.png"
            >
            </PostPreview>
        </div>
    </>
  }
}

export default About;