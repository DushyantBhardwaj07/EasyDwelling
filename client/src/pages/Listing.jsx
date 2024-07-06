import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';

export default function Listing() {
  SwiperCore.use([Navigation, Autoplay]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const { listingId } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          return;
        }
        setListing(data);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchListing();
  }, [listingId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return <p className='text-center my-7 text-3xl'>Loading...</p>;
  if (error) return <p className='text-center my-7 text-3xl'>Something went wrong!</p>;
  if (!listing) return null;

  return (
    <main className="relative text-xl">
      <Swiper
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-[550px] w-full"
      >
        {listing.imageUrls.map((url) => (
          <SwiperSlide key={url}>
            <div
              className='w-full h-full bg-cover bg-center'
              style={{ backgroundImage: `url(${url})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-16 h-16 flex justify-center items-center bg-slate-100 cursor-pointer'>
        <FaShare className='text-slate-500 text-2xl' onClick={handleCopyLink} />
      </div>
      {copied && (
        <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2 text-xl'>
          Link copied!
        </p>
      )}

      <div className='max-w-6xl mx-auto p-3 my-7 flex flex-col gap-6'>
        <h1 className='text-3xl font-bold'>
          {listing.name} - ${' '}
          {listing.offer
            ? listing.discountPrice.toLocaleString('en-US')
            : listing.regularPrice.toLocaleString('en-US')}
          {listing.type === 'rent' && ' / month'}
        </h1>
        
        <p className='flex items-center gap-2 text-slate-600 text-xl'>
          <FaMapMarkerAlt className='text-green-700 text-2xl' />
          {listing.address}
        </p>
        
        <div className='flex gap-4'>
          <span className='bg-red-700 text-white text-center p-2 rounded-md w-full max-w-[250px] text-xl'>
            {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
          </span>
          {listing.offer && (
            <span className='bg-green-900 text-white text-center p-2 rounded-md w-full max-w-[250px] text-xl'>
              ${+listing.regularPrice - +listing.discountPrice} discount
            </span>
          )}
        </div>
        
        <p className='text-slate-800 text-xl'>
          <span className='font-semibold text-black'>Description - </span>
          {listing.description}
        </p>
        
        <ul className='text-green-900 font-semibold text-xl flex flex-wrap items-center gap-6 sm:gap-8'>
          {[
            { icon: FaBed, text: `${listing.bedrooms} bed${listing.bedrooms > 1 ? 's' : ''}` },
            { icon: FaBath, text: `${listing.bathrooms} bath${listing.bathrooms > 1 ? 's' : ''}` },
            { icon: FaParking, text: listing.parking ? 'Parking spot' : 'No Parking' },
            { icon: FaChair, text: listing.furnished ? 'Furnished' : 'Unfurnished' },
          ].map(({ icon: Icon, text }, index) => (
            <li key={index} className='flex items-center gap-2 whitespace-nowrap'>
              <Icon className='text-2xl' />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}