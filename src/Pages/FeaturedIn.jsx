import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';  // Untuk pagination
import 'swiper/css/navigation';  // Untuk navigasi
import 'swiper/css/autoplay';  // Untuk autoplay


const FeaturedIn = () => {
  return (
    <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">
      <div
        className="elementor-element elementor-element-9037bc9 elementor-widget elementor-widget-heading aos-init aos-animate"
        data-id="9037bc9"
        data-element_type="widget"
        id="as-featured-in-text"
        data-aos="fade-in"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
        data-aos-delay="450"
        data-aos-anchor="#top-heading-name"
        data-aos-once="true"
        data-widget_type="heading.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-heading-title elementor-size-default">
            As featured in
          </div>
        </div>
      </div>

      <div
        className="elementor-element elementor-element-e2f72e7 elementor-skin-carousel elementor-arrows-yes elementor-widget elementor-widget-media-carousel aos-init aos-animate e-widget-swiper"
        data-id="e2f72e7"
        data-element_type="widget"
        id="as-featured-in_carousel"
        data-aos="fade-in"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
        data-aos-delay="450"
        data-aos-anchor="#as-featured-in-text"
        data-aos-once="true"
        data-widget_type="media-carousel.default"
      >
        <div className="elementor-widget-container">
          <Swiper
            slidesPerView={5}
            spaceBetween={70}
            slidesPerViewTablet={4}
            slidesPerViewMobile={2}
            lazy={true}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={500}
          >
            <SwiperSlide>
              <a
                href="https://www.frontendmentor.io/articles/building-an-effective-frontend-developer-portfolio--7cE8BfMG_"
                target="_blank"
                rel="nofollow"
              >
                <div
                  className="elementor-carousel-image"
                  style={{
                    backgroundImage:
                      'url("https://tamalsen.dev/wp-content/uploads/2024/12/frontend-mentor-logo.svg")',
                  }}
                ></div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a
                href="https://www.wearedevelopers.com/magazine/web-developer-portfolio-examples"
                target="_blank"
                rel="nofollow"
              >
                <div
                  className="elementor-carousel-image"
                  style={{
                    backgroundImage:
                      'url("https://tamalsen.dev/wp-content/uploads/2024/12/WeAreDevelopers-logo.svg")',
                  }}
                ></div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a
                href="https://colorlib.com/wp/developer-portfolios/"
                target="_blank"
                rel="nofollow"
              >
                <div
                  className="elementor-carousel-image"
                  style={{
                    backgroundImage:
                      'url("https://tamalsen.dev/wp-content/uploads/2024/12/colorlib-logo.svg")',
                  }}
                ></div>
              </a>
            </SwiperSlide>

            {/* Slide lainnya */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
