import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../../Assets/BannerImg/Screenshot 2023-09-13 194533.png';
import banner2 from '../../../../Assets/BannerImg/Screenshot 2023-09-13 194618.png';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={banner1} />
            </div>
            <div>
                <img src={banner2} />
            </div>
        </Carousel>
    );
};

export default Banner;