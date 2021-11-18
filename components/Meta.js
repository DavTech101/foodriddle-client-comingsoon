import Head from 'next/head';

const Meta = ({ description, keywords, title }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link rel='icon' href='../favicon.ico' />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Food Riddle',
  keywords: 'Food, riddle, solve',
  description: 'Solves your food riddles',
};

export default Meta;
