import Link from "next/link"

function MainNavigation() {
  return (
    <nav className="mainNavigation">
      <Link href="/">
        <a>Biz Kimiz?</a>
      </Link>
      <Link href="/">
        <a>Blog</a>
      </Link>
      <Link href="/">
        <a>Nasıl Çalışıyor?</a>
      </Link>
      <Link href="/">
        <a>Yardım</a>
      </Link>
    </nav>
  )
}

export default MainNavigation
