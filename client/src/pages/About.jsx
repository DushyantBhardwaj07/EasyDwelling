import React from 'react'

export default function About() {
  return (
    <div className='py-16 px-4 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6 text-slate-700'>Welcome to EasyDwelling</h1>
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <p className='mb-4 text-gray-700 leading-relaxed'>
            EasyDwelling is your trusted partner in finding the perfect home. We understand that your living space is more than just a property – it's where your life unfolds. Our innovative platform is designed to simplify your house-hunting journey, making it as easy and enjoyable as possible.
          </p>
          <p className='mb-4 text-gray-700 leading-relaxed'>
            Founded with a vision to revolutionize the real estate experience, EasyDwelling combines cutting-edge technology with personalized service. We're not just about listings; we're about matching you with a home that fits your lifestyle, aspirations, and needs.
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-4 text-slate-700'>Our Commitment</h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Curated, high-quality property listings</li>
            <li>User-friendly, intuitive search tools</li>
            <li>Transparent and up-to-date information</li>
            <li>Expert guidance throughout your journey</li>
            <li>Innovative virtual tour technologies</li>
          </ul>
        </div>
      </div>
      <div className='mt-8 bg-indigo-100 p-6 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4 text-indigo-800'>Why Choose EasyDwelling?</h2>
        <p className='text-gray-700 leading-relaxed'>
          At EasyDwelling, we believe that finding your ideal home should be an exciting adventure, not a stressful chore. Our team of dedicated professionals works tirelessly to ensure that your experience is smooth, enjoyable, and ultimately successful. Whether you're a first-time buyer, seasoned investor, or looking to rent, EasyDwelling is here to make your real estate dreams a reality.
        </p>
      </div>
    </div>
  )
}