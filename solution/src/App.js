import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import mock_data from './mock_data';
import Story from './components/Story';

class App extends Component {
  state = mock_data;

  render() {
    return (
      <>
        <Helmet>
          <title>Hacker News Viewer</title>
          <link
            href="https://fonts.googleapis.com/css?family=Lato|Roboto"
            rel="stylesheet"
          />
        </Helmet>
        <div className="app">
          {this.state.topStories.map(story => (
            <Story key={story} story={this.state.stories[story]} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
