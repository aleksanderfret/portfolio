import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header>
      <nav style={{ display: 'flex', gap: '8px' }}>
        <Link href="/">Home</Link>
        <Link href="/about-me">About Me</Link>
        <Link href="/portfolio/illustrations">Illustrations</Link>
        <Link href="/portfolio/handicrafts">Handicrafts</Link>
        <Link href="/portfolio/greeting-cards">Greeting Cards</Link>
        <Link href="/contact-me">Contact Me</Link>
      </nav>
    </header>
  );
};

export default Header;
