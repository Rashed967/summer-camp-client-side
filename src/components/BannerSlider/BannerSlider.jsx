import { Carousel } from 'antd';
import img from '../../assets/slider images/img.jpg'
import img1 from '../../assets/slider images/img1.jpg'
import img2 from '../../assets/slider images/img2.jpg'
import img3 from '../../assets/slider images/img3.jpg'

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const BannerSlider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    
    
    return (
        <Carousel autoplay={true} afterChange={onChange}>
      <div>
        {/* <h3 style={contentStyle}>1</h3> */}
        <img src={img} alt="" />
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    );
};

export default BannerSlider;