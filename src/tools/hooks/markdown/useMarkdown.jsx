import React, { useState, useEffect } from 'react';

function useMarkdown(filepath) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(filepath)
        .then((res) => res.text()).then((txt) => setContent(txt));
    }
    if(filepath)
      fetchMarkdown();
  }, [filepath]);

  return { content };
};

export default useMarkdown;