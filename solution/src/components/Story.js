import React from 'react';
import moment from 'moment';

function Story(props) {
  if (!props.story) return null;

  const { title, by, descendants, score, time, url } = props.story;
  return (
    <div className="story">
      <h2 className="story__title">{title}</h2>
      <p className="story__by">
        by <strong>{by}</strong>
      </p>
      <p className="story__votes">
        <span>{score}</span> votes
      </p>
      <p className="story__time">
        {moment(time * 1000).format('Do MMM, YYYY')}
      </p>
      <p className="story__comments">{descendants} comments</p>
      <a className="story__link" href={url} target="_blank">
        Visit Link
      </a>
    </div>
  );
}

export default Story;
