import Head from 'next/head';

const Meta = ({ description, keywords, title }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link rel='icon' href='../favicon.ico' />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Montagu+Slab:wght@500&display=swap'
        rel='stylesheet'
      />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Food Riddle',
  keywords: 'web development, programming',
  description: 'Solves the food riddle',
};

export default Meta;
