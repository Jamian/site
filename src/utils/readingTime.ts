const WORDS_PER_MINUTE = 225;

export function getReadingTime(body: string = ''): { minutes: number; words: number } {
  // Extract text from component props like contentLeft="..." / contentRight="..."
  const propWords: string[] = [];
  const bodyWithoutProps = body.replace(/content(?:Left|Right)="([^"]*)"/g, (_, text) => {
    propWords.push(text);
    return '';
  });

  const cleanText = [bodyWithoutProps, ...propWords]
    .join(' ')
    // Remove MDX import statements
    .replace(/^import\s+.*$/gm, '')
    // Remove HTML/JSX tags (along with inline styles and other attributes)
    .replace(/<[^>]+>/g, ' ')
    // Replace Markdown links [text](url) with just the text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Strip raw URLs
    .replace(/https?:\/\/\S+/g, '')
    // Strip Markdown formatting symbols
    .replace(/[#*_~`>|[\]\^-]/g, ' ');

  const words = cleanText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return { minutes, words };
}
