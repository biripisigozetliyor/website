// import Navigation from "./navigation"
import Head from "next/head"
import Footer from "./footer/index"
import NavigationBar from "./navigationBar"

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Biri Pisi Gözetliyor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>     
      <header className="layout-header"><NavigationBar/></header>
      <main>{children}</main>
      <footer className="section"><Footer/></footer>
    </div>
  )
}

export default Layout
