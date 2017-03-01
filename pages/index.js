import Head from 'next/head'
import markdown from 'markdown-in-js'


const Content = () => markdown`
# Title

## Subtitle

### Subsubtitle

Paragram with also

- One
- nice
- list

[and a link](http://www.pointing.to/nowhere)

*Thank you*
`


const Index = () =>
  <div className="root">
    <Content />
    <style jsx global>{`
      body {
        font-size: large;
      }
    `}</style>
  </div>


export default Index
