import React, {Fragment} from "react"
import Head from "next/head"
import Header from "../components/header"
import Comments from "../components/comments"
import OtherServices from "../components/otherServices"
import Prices from "../components/prices"
import RoadMap from "../components/roadMap"
import Footer from "../components/footer"

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Aanasayfa</title>
      </Head>
      <Header />
      <RoadMap />
      <Prices />
      <OtherServices />
      {/* <Comments /> */}
      <footer className="section"><Footer/></footer>
    </Fragment>
  )
}

export default HomePage
