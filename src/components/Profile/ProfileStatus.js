import React, { Component } from 'react';

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deActivateEditMode = () => {
    this.setState({ editMode: false });
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onBlur={this.deActivateEditMode} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}
