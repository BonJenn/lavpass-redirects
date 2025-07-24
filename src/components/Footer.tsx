'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white dark:bg-black py-4 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/lavpass"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
            className="dark:invert"
          />
        </a>
        <a
          href="https://www.facebook.com/lavpass"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            className="dark:invert"
          />
        </a>
        <a
          href="https://www.tiktok.com/@lavpass"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/tiktok.svg"
            alt="TikTok"
            width={24}
            height={24}
            className="dark:invert"
          />
        </a>
        <a
          href="https://www.youtube.com/@lavpass"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/youtube.svg"
            alt="YouTube"
            width={24}
            height={24}
            className="dark:invert"
          />
        </a>
        <a
          href="https://www.snapchat.com/add/lavpass?sender_web_id=133102ee-99ce-4257-bc85-aeab12bf9f8f&device_type=desktop&is_copy_url=true"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/snapchat.svg"
            alt="Snapchat"
            width={24}
            height={24}
            className="dark:invert"
          />
        </a>
      </div>
    </footer>
  );
} 