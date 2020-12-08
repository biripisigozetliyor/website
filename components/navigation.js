import Link from 'next/link';

function Navigation() {
  return (
    <div>
      <nav>
        <Link href='/'>
          <a>Anasayfa</a>
        </Link>
        <Link href='/about'>
          <a>Hakkımızda</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
