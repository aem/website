import { head } from 'react-isomorphic-render';
import React, { Component, PropTypes } from 'react';

class Layout extends Component {
	render() {
    const title = 'Adam Markon';

    const meta = [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { property: 'og:title', content: 'Adam Markon' },
      { property: 'og:description', content: `Adam Markon is a software developer specializing in front-end web development and React.` },
      { property: 'og:locale', content: 'es-US' }
    ];

    return (
      <div className="content">
        {head(title, meta)}
        <header>
          <h1>Adam Markon</h1>
          <h6>Web Developer. Video Producer. Fraternity Man.</h6>
        </header>
        <section className="body">
          {this.props.children}
        </section>
        <footer>
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
  children : PropTypes.object.isRequired
};

export default Layout;
