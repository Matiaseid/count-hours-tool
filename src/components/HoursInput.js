import React, {useState} from 'react';

import {TimeData} from './TotalHours';

import './HoursInput.css';


function HoursInput(props) {

  const { updateHours } = props;

  const [inputContent, setInputContent] = useState('');

  return (
    <textarea
      id = 'HoursInput'
      value = {inputContent}

      onChange = { event => {

        setInputContent(event.target.value);

        const timeStrings = parseInput(event.target.value);
        updateHours( timeStrings );
      }}
      spellCheck = 'false'
    />
  )
}

function parseInput(input) {

  const pattern = /(\s|^)[0-9]+:[0-9]+(\s|$)|(\s|^)[0-9]+(\s|$)/gm;

  const timeStringsWithWhitespace = input.match(pattern);

  if (timeStringsWithWhitespace) {

    const patternRemoveWhiteSpace = /[0-9:]+/;

    const timeStrings = timeStringsWithWhitespace.map(string =>
      string.match(patternRemoveWhiteSpace)[0]
    );

    return new TimeData(timeStrings);

  } else {

    return null;
  }
}

export { HoursInput };
