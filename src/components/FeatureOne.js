import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* feature area start */}
      <div className='container'>
        <div className='feature-area mb-60'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title mb-0'>
                <h4 className='subtitle'>Services</h4>
                <h2 className='title'>EYECARE SERVICES WE OFFER</h2>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='section-title'>
                <p className='content left-line'>
                At Opal Eye Care, we specialize in cataract, glaucoma, and more, providing comprehensive eye solutions for your health and peace of mind
                </p>
              </div>
            </div>
          </div>
          <div className='feature-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='feature-wrap bg-pink'>
                  <div className='icon'>
                    <img src='assets/img/icon/Cataract.png' alt='Transpro' />
                  </div>
                  <h5>Cataract Services</h5>
                  <p>
                  The cornea is the eye's outermost layer. It is dome-shaped surface front part of the eye that covers the iris, pupil, and anterior chamber.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/Glaucoma.png' alt='Transpro' />
                  </div>
                  <h5>Glaucoma Services</h5>
                  <p>
                  Glaucoma is a group of eye diseases which result in damage to the optic nerve and vision loss. A major risk factor is increased pressure in the eye.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-sky'>
                  <div className='icon'>
                    <img src='assets/img/icon/Refractive.png' alt='Transpro' />
                  </div>
                  <h5>Refractive Services</h5>
                  <p>
                  The retina is the inner coat of the eye which is a light-sensitive layer of tissue. The optics of the eye create an image of the visual world on the retina.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-pink'>
                  <div className='icon'>
                    <img src='assets/img/icon/ROP.png' alt='Transpro' />
                  </div>
                  <h5>Retinopathy of prematurity (ROP) Screening and Management</h5>
                  <p>
                  Refractive eye surgery is improve the refractive state of the eye and decreases or eliminates dependency on glasses or contact lenses.
                  </p>
                </div>
              </div>
              <div className='item'>
              <div className='feature-wrap bg-ash'>
                <div className='icon'>
                  <img src='assets/img/icon/Diabetic-eye.png' alt='Transpro' />
                </div>
                <h5>Diabetic eye chec</h5>
                <p>
                A contact lens is a thin lens placed directly on the surface of the eye. Contact lenses can be worn to correct vision, cosmetic or therapeutic reason.
                </p>
              </div>
            </div>
            <div className='item'>
            <div className='feature-wrap bg-sky'>
              <div className='icon'>
                <img src='assets/img/icon/Investigative-modalities.png' alt='Transpro' />
              </div>
              <h5>Investigative modalities</h5>
              <p>
              A comprehensive eye exam performed by Optometrist, a variety of procedures to evaluate the health of your eyes and the quality of your vision.
              </p>
            </div>
          </div>
          <div className='item'>
          <div className='feature-wrap bg-green'>
            <div className='icon'>
              <img src='assets/img/icon/Pachymetry.png' alt='Transpro' />
            </div>
            <h5>Pachymetry</h5>
            <p>
            A comprehensive eye exam performed by Optometrist, a variety of procedures to evaluate the health of your eyes and the quality of your vision.
            </p>
          </div>
        </div>
      
            </Slider>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
