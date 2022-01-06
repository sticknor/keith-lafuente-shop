// React
import React from 'react';


function Faq() {


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
      Shipping
      Many of our items are made to order and may take up to 10 business days to ship after order confirmation. We appreciate your patience in advance.
      We only offer shipping within the USA, for now...

      Returns
      Returns will be accepted within 14 days of delivery date. Items must be returned in the original, unused condition.
      To complete your return, please email keithlafuente@gmail.com with your order number and reason for the return.
      Shipping costs are nonrefundable, and all return fees are the responsibility of the customer.

      Refunds
      Once your return has been received and inspected, we will notify you whether your refund request has been approved or rejected.
      If approved, a refund will be processed and a confirmation will be sent to the email address provided at check out.
      Please note your bank or financial institution might require additional time to process the refund to your account.
    </div>
  );
}

Faq.propTypes = {
}

export default Faq;