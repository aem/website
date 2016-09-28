import Beautify from 'js-beautify';
import docsSoap from 'docs-soap';
import React, { Component } from 'react';

class DocsSoapDemo extends Component {
  constructor() {
    super();
    this.state = {
      docsHtml: ""
    };
  }

  onPaste = (event) => {
    this.setState({docsHtml: event.clipboardData.getData("text/html").slice(22)});
  };

  render = () => {
    return (
      <div className="demo" itemProp="exampleOfWork">
        <textarea
          onPaste={this.onPaste}
          placeholder="Paste Google Docs content here..."
        >
        </textarea>
          <div className="output">
            <div className="html-output">
              <h6>Original HTML</h6>
              <pre>
                {Beautify.html(this.state.docsHtml, {
                  indent_char: ' ',
                  indent_size: 2,
                  indent_inner_html: true,
                  unformatted: []
                })}
              </pre>
            </div>
            <div className="clean-html">
              <h6>Transformed HTML</h6>
              <pre>
                {this.state.docsHtml && Beautify.html(docsSoap(this.state.docsHtml), {
                  indent_char: ' ',
                  indent_size: 2,
                  indent_inner_html: true,
                  unformatted: []
                })}
              </pre>
            </div>
            <div className="clean-output-wrapper">
              <h6>Resulting Rendered Output</h6>
              <div
                className="clean-output"
                dangerouslySetInnerHTML={{__html: this.state.docsHtml && docsSoap(this.state.docsHtml)}}
              >
              </div>
            </div>
          </div>
      </div>
    )
  };
}

export default DocsSoapDemo;
