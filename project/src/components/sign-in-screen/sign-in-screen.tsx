import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';
import { loginAction } from '../../store/actions/api-actions';
import { AuthData } from '../../types/auth-data';
import { InputSignForm } from '../../types/Input-sign-form';

const formFields = {
  email: 'E-mail',
  password: 'Password',
};

function SignInScreen(): JSX.Element {

  const dispatch = useDispatch();
  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const history = useHistory();

  const [formState, setFormState] = useState<{ [key: string]: InputSignForm }>({
    email: {
      value: '',
      error: true,
      errorText: 'Login field must be valid',
      regex: '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.+.[a-zA-Z]{2,4}$',
    },
    password: {
      value: '',
      error: true,
      errorText: 'Password must contain at least one number and one letter',
      regex: '(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+',
    },
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    const regExp = new RegExp(formState[name].regex);
    const isNotValidValue = !regExp.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        error: isNotValidValue,
      },
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      login: formState.email.value,
      password: formState.password.value,
    });

    history.push(AppRoute.Main);
  };

  return (
    <div className="page page--gray page--login" >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              {Object.entries(formFields).map(([name, label]) => (
                <div className="login__input-wrapper form__input-wrapper" key={name}>
                  {
                    formState[name].error &&
                    <p className="form__input-error">
                      {formState[name].errorText}
                    </p>
                  }
                  <label className="visually-hidden">{label}</label>
                  <input
                    className="login__input form__input"
                    type={name}
                    name={name}
                    placeholder={label}
                    value={formState[name].value}
                    required
                    onChange={handleChange}
                  />
                </div>
              ),
              )}
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={formState.email.error || formState.password.error}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div >
  );
}

export default SignInScreen;

