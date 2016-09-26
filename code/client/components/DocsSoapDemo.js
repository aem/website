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
      <div className="demo">
        <textarea
          onPaste={this.onPaste}
          placeholder="Paste Google Docs content here..."
        >
        </textarea>
        {this.state.docsHtml &&
          <div className="output">
            <pre className="html-output">
              {Beautify.html(this.state.docsHtml, {
                indent_char: ' ',
                indent_size: 2,
                indent_inner_html: true,
                unformatted: []
              })}
            </pre>
            <div className="clean-output" dangerouslySetInnerHTML={{__html: docsSoap(this.state.docsHtml)}}></div>
          </div>
        }
      </div>
    )
  };
}

export default DocsSoapDemo;
