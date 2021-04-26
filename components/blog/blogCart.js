import React from "react"

function BlogCart(props) {
  const { imgURL, headline } = props
  return (
    <div className="blog-cart">
      <a href="/blog-post">
        <div className="post-date">
          <time dateTime="2021-02-21">21/02/2021</time>
        </div>
        <div className="post-img">
          <img src={imgURL} alt="blog-img" />
        </div>
        <div className="post-content">
          <h4>{headline}</h4>
        </div>
      </a>
    </div>
  )
}

export default BlogCart
