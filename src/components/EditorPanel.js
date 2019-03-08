import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const color = '#eee';

const styles = {
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: color,
  },
  label: {
    textAlign: 'center',
    padding: 8,
  },
  editable: {
    flexGrow: 1,
    padding: 20,
    margin: 4,
    outline: 'none',
    resize: 'none',
  }
};

class EditorPanel extends Component {
  updateValue = (evt) => {
    evt.preventDefault();
    this.props.onChange(evt.target.value)
  };
  render() {
    const props = this.props;
    return (
      <div className={props.classes.root}>
        <div className={props.classes.label}>{props.label}</div>
        <textarea
          className={props.classes.editable}
          type="text"
          value={props.value}
          onChange={this.updateValue}
        />
      </div>
    );
  }
}

export default withStyles(styles)(EditorPanel);
