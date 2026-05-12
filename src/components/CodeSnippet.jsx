import React from 'react';

const CodeSnippet = (props) => {
  return (
   <div>
        <h1>{props.title}</h1>
        <p>{props.language}</p>
        <pre><code>{props.code}</code></pre>
    </div>
  );
};

export default CodeSnippet;
