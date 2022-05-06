import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Heading from './Heading';
import Anchor from './Anchor';
import Img from './Img';
import Paragraph from './Paragraph';
import Code from './Code';
import classes from './index.module.scss';

interface MarkdownProps {
  slug: string;
  content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ slug, content }) => {
  return (
    <section className={classes.markdown}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: Heading(1),
          h2: Heading(2),
          h3: Heading(3),
          a: Anchor,
          p: Paragraph(slug),
          img: Img(slug),
          code: Code,
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default Markdown;
