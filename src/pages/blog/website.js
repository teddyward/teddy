import React from "react"
import '../../index.css';


class Website extends React.Component {

  render() {
    return <>
        <p>
            I'm not really sure why I decided to start tinkering _this_ weekend. I was
            totally sick on Friday, and usually I am completely burned out by the weekend,
            so I don't really know why I felt like building something on Sunday. I think that
            perhaps after watching 9 episodes straight of Love Is Blind on Friday night, I felt
            that I needed to exercise my skills a bit? Anyway, I knew I wanted to mess around with
            Snap (after someone on my team made a totally awesome single line diagram),
            Tailwind (after seeing Twitter arguments about it), 
            and Gatsby (after forking a career progression site), so it seemed like a good time. I guess
            I also thought that it might be a good way for prospective Kevala candidates to get to know me.
        </p>
        <p>
            I totally hated tailwind. In fact, you may notice that I've already abandoned it on this
            blog post. I've spent the last 10 years learning CSS in bits and pieces. CSS isn't really like
            JavaScript/Python/Java/whatever where the syntax is super-easily replaceable. For me, it's
            something that I want to be able to whip out quickly, and be extremely precise through deep
            knowledge of the API. I don't want to Google stuff; I just want to play in the Chrome devtools.
            Enter Tailwind and its impossible-to-memorize acronyms, and suddenly I'm back to a crawl as I 
            have to Google every. single. thing. It's terrible. No.
        </p>
        <p>
            Snap, on the other hand, is totally cool and awesome. I got off to a rocky start because I
            completely failed to get the rotate features to work, but once I figured out the syntax for
            SVG `path`s, I was totally hooked. I think I'll come back to that little Pacman animation on
            the front page several times. Making that was one of my happiest development experiences this year.
        </p>
        <p>
            Finally, we have Gatsby. The last couple sites that I've worked on had both been in
            SvelteKit, until I recently forked. Gatsby is nice, because I'm pretty sure I'll be able to
            deploy this on Github pages?
        </p>
    </>
  }
}

export default Website;