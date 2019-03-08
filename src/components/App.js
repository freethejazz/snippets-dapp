import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import EditorPanel from '../components/EditorPanel';
import DynamicIFrame from '../components/DynamicIframe';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  grow: {
    flexGrow: 1,
  },
  sources: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    minHeight: 180,
  },
  results: {
    flex: 2,
  }
};

class App extends Component {
  render() {
    const {
      classes,
      html,
      css,
      js,
      setHtml,
      setCss,
      setJs,
    } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.sources}>
          <EditorPanel label="HTML" value={html} onChange={setHtml}/>
          <EditorPanel label="CSS" value={css} onChange={setCss}/>
          <EditorPanel label="JavaScript" value={js} onChange={setJs}/>
        </div>
        <div className={classes.results}>
          <DynamicIFrame html={html} css={css} js={js} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
