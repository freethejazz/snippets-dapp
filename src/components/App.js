import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import EditorPanel from '../components/EditorPanel';
import DynamicIFrame from '../components/DynamicIframe';
import Loading from '../components/Loading';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  grow: {
    flexGrow: 1,
  },
  name: {
    fontSize: '1.1em',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#EEE',
    textAlign: 'center',
    textDecoration: 'underline'
  },
  sources: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    minHeight: 180,
    borderBottom: '1px solid #CCC',
  },
  results: {
    flex: 2,
  }
};

class App extends Component {
  render() {
    const {
      classes,
      loading,
      name,
      code,
      setHtml,
      setCss,
      setJs,
    } = this.props
    if (loading) {
      return (
        <div className={classes.root}>
          <Loading message={"Loading snippet.."}/>
        </div>
      )
    }
    return (
      <div className={classes.root}>
        <div className={classes.name}>{name}</div>
        <div className={classes.sources}>
          <EditorPanel label="HTML" value={code.html} onChange={setHtml}/>
          <EditorPanel label="CSS" value={code.css} onChange={setCss}/>
          <EditorPanel label="JavaScript" value={code.js} onChange={setJs}/>
        </div>
        <div className={classes.results}>
          <DynamicIFrame html={code.html} css={code.css} js={code.js} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
