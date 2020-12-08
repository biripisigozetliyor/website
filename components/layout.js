import Navigation from "./navigation"
import Head from "next/head"

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Biri Pisi Gözetliyor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <Navigation />
      <main>{children}</main>
      {/* <footer>footer</footer> */}
    </div>
  )
}

export default Layout
