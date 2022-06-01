import CloudTag from "../CloudTag";

function AboutMe() {
  return (
    <section
      id='about'
      className='bg-custom-light-pattens-blue px-8 py-8 dark:bg-custom-dark-motorcycle-black sm:px-14 '>
      <h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one sm:text-4xl '>
        About me
      </h2>
      <div className='md:flex md:items-center md:gap-16'>
        <div className='md:w-1/2'>
          <p className='mb-3 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
            I have been, for the past few years, helping clients use Social Media 
            And  Search Engine for Marketing Perposes and to move customers throughout the different
            stages of their funnels leading ultimately to a Complete Digital conversions.
          </p>
          <p className='mb-3 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
            During that time, I’ve also accumulated 3+ years of experience in Web
            development and broadened my skillset to encompass Javascript, React, Node.js
            and Express.js as an answer to my clients’ growing needs.
          </p>
          <p className='mb-3 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
            I love what I do and I go above and beyond my due diligence for each client,
            bridging the gap between marketing and technology.
          </p>
          <p className='mb-3 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
            Here are a few technologies I’ve been working with :
          </p>
        </div>
        <CloudTag />
      </div>
    </section>
  );
}

export default AboutMe;
