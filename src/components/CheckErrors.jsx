import React, { useEffect } from 'react';
import fetchMock from 'fetch-mock';
import ErrorItems from '../data/error-items.json';

const errorResponse = { response: ErrorItems };

fetchMock.get(
  /\/checks/,
  {
    status: 200,
    body: JSON.stringify(errorResponse),
    statusText: 'OK',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    sendAsJson: false,
  },
  { overwriteRoutes: true }
);

export default function CheckErrors() {
  useEffect(() => {
    window
      .fetch('/checks')
      .then((response) => response.json())
      .then((json) => {
        const flow = JSON.parse(json.body);
        console.log('flow: ', flow);
      });
  }, []);

  return <div>Help Me!</div>;
}
