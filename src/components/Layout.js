import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const allFooterMsgs = [
  'one small step in the debugger, one giant leap towards space internet',
  'forged in the fire',
  'the world will overcome this',
  'knock knock room service',
  'best wishes from the tiny people living inside your computer',
  'made with heart-emojis in San Francisco, California',
  'can you believe they just let me write anything in this box',
  'mostly open-source!',
  'a cool company about making friends',
  "hope you're having a swell day",
  'did you find all the secrets on this page?',
  // "this is the end of the website"
]

const Footer = () => {
  const footerMsg =
    allFooterMsgs[Math.floor(Math.random() * allFooterMsgs.length)]

  useEffect(() => {})

  return (
    <div className="footer">
      <div className="fadein">{footerMsg}</div>

      <style jsx>{`
        .footer {
          width: 100%;
          background: #16103c;
          padding: 24px;
          text-align: center;
          color: white;
          word-spacing: 2px;
          letter-spacing: 1px;
          box-sizing: border-box;
          font-size: 0.8em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
          {/* <footer>© {new Date().getFullYear()} RoomService.dev</footer> */}
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
