import NextHead from 'next/head';

interface IProps {
  planetName?: string;
}

export const Head = ({ planetName }: IProps) => {
  const textContent = planetName
    ? `${planetName} - Star Wars Navigation System`
    : 'Star Wars Navigation System';

  return (
    <NextHead>
      <title>{textContent}</title>
      <meta name="description" content={textContent} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
