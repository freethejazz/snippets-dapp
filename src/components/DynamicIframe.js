import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    border: 0,
  },
};

const DynamicIFrame = (props) => {
  const wrappedContentString = `<html>
    <head>
    <style>
      ${props.css || ''}
    </style>
    </head>
    <body>
      ${props.html || ''}
      <div id="internal-error-ribbon"></div>
      <script>
        function showError(e) {
          let ribbon = document.getElementById('internal-error-ribbon');
          ribbon.innerText = e
        }
        try {
          ${props.js || ''}
        } catch (e) {
          showError(e)
        }
      </script>
    </body>
    </html>`;
  return (
    <iframe className={props.classes.root} title="results" srcdoc={wrappedContentString} />
  )
}

export default withStyles(styles)(DynamicIFrame);
