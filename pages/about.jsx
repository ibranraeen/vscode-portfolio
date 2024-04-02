const AboutPage = () => {
  return (
    <>
      <h3>I am a frontend developer at LetsUpgrade</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
