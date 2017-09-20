import Layout from '../components/Layout';
import React from 'react';
import { Pre } from 'lib';
export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div>Hello, Next.js!</div>
        <Pre>
          Some preformatted text<br /> asdfasdfasdfalskdfjhasdlkfjh
        </Pre>
      </Layout>
    );
  }
}
