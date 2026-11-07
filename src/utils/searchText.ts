import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';

interface TextNode {
  type: string;
  value?: string;
  alt?: string | null;
  children?: TextNode[];
}

// Parse content rather than stripping characters: MDX imports, JSX attributes,
// and expressions are source code, not prose for visitors to search.
export function extractSearchText(source: string, mdx = false) {
  const parser = unified().use(remarkParse);
  if (mdx) parser.use(remarkMdx);

  function text(node: TextNode): string {
    if (['text', 'inlineCode', 'code'].includes(node.type)) return node.value ?? '';
    if (node.type === 'image') return node.alt ?? '';
    return node.children?.map(text).join(' ') ?? '';
  }

  return text(parser.parse(source)).replace(/\s+/g, ' ').trim();
}
