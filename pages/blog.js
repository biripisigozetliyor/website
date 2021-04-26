// import Layout from "../components/layout"
import Layout from "../components/layout"
import Title from "../components/sectionTitle"
import BlogCart from "../components/blog/blogCart"

function Blog() {
  return (
    <Layout>
      <header className="page-header">
        <div className="last-blog-container">
          <div className="last-blog-img"></div>
          <div className="last-blog-detail">
            <div className="post-date">
              <time dateTime="2021-02-21">21/02/2021</time>
            </div>
            <div className="blog-abs">
              <h4>
                Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?
              </h4>
              <p>
                Hayatımıza girdikleri andan itibaren kendimizi onlara adıyor;
                her şeyimizi onlarla paylaşıyoruz. En önemlisi de evimizi. Evet,
                bir süre sonra kan kardeşimiz, yavrumuz, sevgilimiz haline gelen
                kedilerimizden bahsediyoruz...
              </p>
            </div>

            <div className="read-more">
              <a className="btn read-more-btn">Okumaya devam et</a>
            </div>
          </div>
        </div>
      </header>
      <section className="section-blog bg-softWhite">
        <div className="blog-container">
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
          <BlogCart imgURL="/blog-img.jpg" headline="Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?"/>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
