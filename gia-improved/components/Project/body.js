import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import partner1 from '../../assets/images/cronos-a2.png';
import partner2 from '../../assets/images/cronos-c2.png';
import partner3 from '../../assets/images/cronos2.gif';
import partner4 from '../../assets/images/cronos1.png';
import partner5 from '../../assets/images/crons-a1.png';
import partner6 from '../../assets/images/cronos-c.png';
import partner7 from '../../assets/images/cronos-w.png';
import partner8 from '../../assets/images/cronos-w1.png';
import partner9 from '../../assets/images/cronos-m.png';

const CollectionPage = () => {
  const images = [
    { name: 'Cronos', src: partner1 },
    { name: 'Bird NFT', src: partner2 },
    { name: 'Mystical', src: partner3 },
    { name: 'Viking', src: partner4 },
    { name: 'Ant Man', src: partner5 },
    { name: 'Captain', src: partner6 },
    { name: 'Woman', src: partner7 },
    { name: 'Woman', src: partner8 },
    { name: 'Monster', src: partner9 },
  ]; // Add more images as needed

  return (
    <div className=' w-[91%] xl:max-w-[1320px] mx-auto sm:my-[96px] my-[100px] text-center ' >
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 mt-10'>
      {images.map((image, index) => (
        <div key={index} className='text-center'>
          <div className='col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mt-4 sm:mt-0'>
            <div className='relative text-center pillerhvr'>
              <div className='image-container'>
                <Image src={image.src} alt={image.name} className='rounded-[32px] object-cover w-full h-auto mx-auto md:w-[435px] md:h-[435px]' />
                <div className='image-overlay'></div>
                <div className='image-text'>
                  <p className='f-f-m text-tiny text-white pb-4' >
                    Hold $LEO like Lionel Messi holds the ball, secure sols like he secured his legacy.
                  </p>
                </div>
              </div>
              <div className='absolute top-[26px] w-full'>
                <Link href=''>
                  <button className='strng-btn rounded-[58px] w-[223px] h-[52px] md:w-[257px] md:h-[58px] text-white text-base f-f-b'>
                    {image.name} <span className='f-f-m text-tiny text-primary'>(Stake Me)</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CollectionPage;
