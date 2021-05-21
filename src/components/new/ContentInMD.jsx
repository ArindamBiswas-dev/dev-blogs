import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './markdownStyle.module.css';

function ContentInMD({ postContent }) {
  console.log({ postContent });
  return (
    <div className={styles.mdStyle}>
      <ReactMarkdown
        children={postContent}
        remarkPlugins={[remarkGfm]}
        components={components}
      />
    </div>
  );
}

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        language="javascript"
        style={cb}
        children={String(children).replace(/\n$/, '')}
        showLineNumbers
      />
    ) : (
      <code children={String(children).replace(/\n$/, '')} {...props} />
    );
  },
};

export default ContentInMD;
