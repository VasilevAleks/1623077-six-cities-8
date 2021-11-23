import { Link } from 'react-router-dom';
import FooterComponet from '../footer/footer';
import HeaderComponet from '../header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <HeaderComponet />

      <div className="page page--gray" style={{ margin: '220px 200px', textAlign: 'center' }}>
        <h1>404. Page not found</h1>
        <Link to="/">Back to the main page</Link>
      </div>
      <FooterComponet />
    </>
  );
}

export default NotFoundScreen;
