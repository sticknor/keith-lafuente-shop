// React
import React from 'react';


function About() {


  // const [imageIndex, setImageIndex] = useState(0);
  // const [prevEnabled, setPrevEnabled] = useState(false);
  // const [nextEnabled, setNextEnabled] = useState(false);

  // const handlePrevClick = () => {
  //   setImageIndex(imageIndex - 1);
  // };

  // const handleNextClick = () => {
  //   console.log('handle nxt lci');
  //   setImageIndex(imageIndex + 1);
  // };

  // useEffect(() => {
  //   if (useImageCarousel) {
  //     setPrevEnabled(imageIndex - 1 >= 0);
  //     setNextEnabled(imageIndex + 1 < images.length);
  //   }
  // }, [imageIndex, useImageCarousel]);


  /* 
    {prevEnabled && (
      <div className={'prev-button'} onClick={handlePrevClick}></div>
    )}
    {nextEnabled && (
      <div className={'next-button'} onClick={handleNextClick}></div>
    )} 
  */

  return (
    <div>
      Keith Lafuente plays with Asian-American archetypes through fashion and storytelling, building an expansive fantasy world that acknowledges our roots, celebrates our community, and pushes culture forward.

      contact:
      keithlafuente@gmail.com, instagram @keith _lafuente
    </div>
  );
}

About.propTypes = {}

export default About;