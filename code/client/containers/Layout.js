import { connect } from 'react-redux';
import cx from 'classnames';
import { head } from 'react-isomorphic-render';
import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';
import { RouteTransition } from 'react-router-transition';

@connect(model => ({ location: model.router.location }))
class Layout extends Component {
  collapseNav = () => {
    document.querySelector('navbar-toggle').trigger('clock');
  };

	render() {
    const title = 'Adam Markon';

    const meta = [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { name: 'google-site-verification', content: '_D_UusvbMFmpydhJYUZ9Qr7Mi1WJkeiieGGO3Lk0IJA' },
      { name: 'description', content: 'Adam is a software developer specializing in front-end web development with ReactJS, as well as a professional sports broadcaster.'},
      { property: 'og:title', content: 'Adam Markon' },
      { property: 'og:description', content: `Adam Markon is a software developer specializing in front-end web development and React.` },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: `https://adammarkon.com${require('../img/headshot.png')}`}
    ];

    return (
      <div className="content">
        {head(title, meta)}
        <header>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header navbar-left">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#nav-links"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="brand">
                  <h1>Adam Markon</h1>
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="nav-links">
                <ul className="nav navbar-nav navbar-right">
                  <li style={{marginTop: 0 /* override default list style */}}>
                    <Link
                      to="/"
                      className={cx({active: this.props.location.pathname === '/'})}
                      onClick={this.collapseNav}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/open-source"
                      className={cx({active: this.props.location.pathname.match(/open-source/)})}
                      onClick={this.collapseNav}
                    >
                      Open-source
                    </Link>
                  </li>
                  <li style={{marginBottom: 0 /* override default list style */}}>
                    <Link
                      to="/resume"
                      className={cx({active: this.props.location.pathname.match(/resume/)})}
                      onClick={this.collapseNav}
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="body">
          <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            runOnMount={true}
          >
          {this.props.children}
          </RouteTransition>
        </div>
        <footer className="container-fluid">
          <span className="copyright">© Adam Markon 2016</span>
          <div className="inline-block right profile-links">
            <a href="https://github.com/aem" target="_blank">
              <span>@aem</span>
              <img src={require('../img/github.png')} alt="GitHub Logo" />
            </a>
            <a href="https://www.linkedin.com/in/adammarkon" target="_blank">
              <span>Adam Markon</span>
              <img src={require('../img/linkedin.png')} alt="LinkedIn Logo" />
            </a>
            <a href="https://www.twitter.com/amarkon88" target="_blank">
              <span>@amarkon88</span>
              <img src={require('../img/twitter.png')} alt="Twitter Logo" />
            </a>
          </div>
        </footer>
      </div>
    );
  };
}

Layout.propTypes = {
  children : PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
