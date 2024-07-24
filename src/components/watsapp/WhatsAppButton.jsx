// components/WhatsAppButton.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhatsAppButton = () => {
  const phoneNumber = '918146274050'; // Include the country code, e.g., '919876543210' for India

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src='/assets/social-icons/watsapp.png' width={30} height={30} alt='stamping' />
    </Link>
  );
};

export default WhatsAppButton;
