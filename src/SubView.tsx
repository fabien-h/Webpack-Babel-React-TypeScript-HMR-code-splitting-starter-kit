import React from 'react';
import { hot } from 'react-hot-loader';

export interface PropsInterface {
  counter: number;
}

class SubView extends React.Component<PropsInterface, {}> {
  public render(): JSX.Element {
    const { counter } = this.props;
    return (
      <div>This is a subview created when the counter was: {counter || 0}</div>
    );
  }
}

export default hot(module)(SubView);
