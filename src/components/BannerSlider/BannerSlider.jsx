import { Carousel } from 'antd';
import img4 from '../../assets/slider images/img4.jpg'
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
      <div className='lg:h-[800px]'>
        {/* <h3 style={contentStyle}>1</h3> */}
        <img className='object-fill w-full ' src={img1} alt="" />
      </div>
      <div className='lg:h-[800px]'>
        
            <img className='object-fill w-full ' src={img2} alt="" />
    
      </div>
      <div className='lg:h-[800px]'>
        <img className='object-fill w-full ' src={img3} alt="" />
      </div>

      <div className='lg:h-[800px]'>
        <img className='object-fill w-full ' src={img4} alt="" />
      </div>
    </Carousel>
    );
};

export default BannerSlider;