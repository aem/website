import { connect } from 'react-redux';
import cx from 'classnames';
import { head } from 'react-isomorphic-render';
import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';

@connect(model => ({ location: model.router.location }))
class Layout extends Component {
	render() {
    const title = 'Adam Markon';

    const meta = [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { name: 'description', content: 'Adam Markon is a software developer specializing in front-end web development and React.'},
      { property: 'og:title', content: 'Adam Markon' },
      { property: 'og:description', content: `Adam Markon is a software developer specializing in front-end web development and React.` },
      { property: 'og:locale', content: 'es-US' }
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
                  <h6>Web Developer. Video Producer. Fraternity Man.</h6>
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="nav-links">
                <ul className="nav navbar-nav navbar-right">
                  <li style={{marginTop: 0 /* override default list style */}}>
                    <Link
                      to="/"
                      className={cx({active: this.props.location.pathname === '/'})}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="open-source"
                      className={cx({active: this.props.location.pathname.match(/open-source/)})}
                    >
                      Open-source
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="resume"
                      className={cx({active: this.props.location.pathname.match(/resume/)})}
                    >
                      Resume
                    </Link>
                  </li>
                  <li style={{marginBottom: 0 /* override default list style */}}>
                    <Link
                      to="contact"
                      className={cx({active: this.props.location.pathname.match(/contact/)})}
                    >
                      Contact Adam
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <section className="body">
          {this.props.children}
        </section>
        <footer className="container-fluid">
          © Adam Markon 2016
          <span style={{visibility: 'hidden'}}>
            Maybe I can convince website crawlers that my website is all about giraffes. Giraffe giraffe giraffe.
          </span>
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
