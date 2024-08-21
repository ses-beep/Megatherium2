import React from 'react';
import '../../styles/testimonial.css';
import Slider from "react-slick";
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';

const Testimonial = () => {

    const settings = {
      dots: false,
      infiite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      slideToShow: 1,
      slideToScroll:1,
      swipeToSlide: true,
    }
  return (
    <section>
      <div className="container">
        <div className="slider_content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>Trusted by more than <span className="highlight">5,000 customers</span></h2>
        </div>

        <div className="slider_wrapper">
        <Slider {...settings}>
      <div className='slider_item'>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus ipsam culpa, error voluptate exercitationem quas odio sint recusandae blanditiis, enim sapiente officiis dolor repellendus. Expedita veritatis fugit, nihil iusto, consequuntur quibusdam aspernatur corporis, laborum nisi aut numquam distinctio reprehenderit?</p>

          <div className="customer_details">
            <div className="customer_img">
              <img src={ava01} alt="" />
            </div>

            <div>
              <h5 className="customer_name">Jhon Doe</h5>
              <p className="description">CEO, Workcreation</p>
            </div>
          </div>
      </div>

      <div className='slider_item'>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus ipsam culpa, error voluptate exercitationem quas odio sint recusandae blanditiis, enim sapiente officiis dolor repellendus. Expedita veritatis fugit, nihil iusto, consequuntur quibusdam aspernatur corporis, laborum nisi aut numquam distinctio reprehenderit?</p>

          <div className="customer_details">
            <div className="customer_img">
              <img src={ava02} alt="" />
            </div>

            <div>
              <h5 className="customer_name">Anney Martin</h5>
              <p className="description">Sr. Product Designer</p>
            </div>
          </div>
      </div>

      <div className='slider_item'>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus ipsam culpa, error voluptate exercitationem quas odio sint recusandae blanditiis, enim sapiente officiis dolor repellendus. Expedita veritatis fugit, nihil iusto, consequuntur quibusdam aspernatur corporis, laborum nisi aut numquam distinctio reprehenderit?</p>

          <div className="customer_details">
            <div className="customer_img">
              <img src={ava03} alt="" />
            </div>

            <div>
              <h5 className="customer_name">William Cooper</h5>
              <p className="description">Software Developer</p>
            </div>
          </div>
      </div>
    </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial