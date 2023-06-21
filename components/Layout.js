import NavBar from './NavBar';
import { useRouter } from 'next/router';
import Seo from './Seo';

export default function Layout({ children }) {
  const router = useRouter();
  const obj = { '/': 'Home', '/about': 'About' };
  return (
    <>
      <Seo title={obj[router.pathname]} />
      <NavBar />
      <div>{children}</div>
    </>
  );
}
