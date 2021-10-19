import Header from '../header/header-site';
import {Link} from 'react-router-dom';

type NotFoundScreenProps = {
  userName: string,
}


function NotFoundScreen({userName}: NotFoundScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Header userName = {userName}/>

      <main className="page__main page__main--index">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default NotFoundScreen;
