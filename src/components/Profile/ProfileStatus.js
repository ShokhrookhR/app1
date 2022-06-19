import React, { Component } from 'react';

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.profileStatus,
  };
  activateEditMode = () => {
    console.log('this:', this);
    this.setState({ editMode: true });
  };
  deActivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onChangeStatus = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 24363;
    }
    this.props.setStatus(userId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        Мой Статус:
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.profileStatus || '---'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onChangeStatus}
              autoFocus
              onBlur={this.deActivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
