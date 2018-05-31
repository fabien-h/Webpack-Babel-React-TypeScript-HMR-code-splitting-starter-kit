import React from 'react';
import { hot } from 'react-hot-loader';

export interface AppPropsInterface {}
export interface AppStateInterface {
  counter: number;
  subView: React.StatelessComponent | null;
}

class App extends React.Component<AppPropsInterface, AppStateInterface> {
  state = {
    counter: 0,
    subView: null
  };

  private incrementCounter = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  private addSubView = (): void => {
    import('./SubView')
      .then(module => {
        const SubView = module.default;
        this.setState({
          subView: <SubView counter={this.state.counter} />
        });
      })
      .catch(error => console.error(error));
  };

  public render(): JSX.Element {
    return (
      <div>
        Counter: {this.state.counter}
        <br />
        <button onClick={this.incrementCounter}>add</button>
        <br />
        <button onClick={this.addSubView}>add sub view</button>
        {this.state.subView}
      </div>
    );
  }
}

export default hot(module)(App);
