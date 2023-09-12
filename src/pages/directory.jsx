import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import "react-social-icons/mailto";
import "react-social-icons/twitter";

const Directory = () => {
  return (
    <div className="max-w-3xl rounded-lg p-8">
      <Link
        to="/goal"
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-center items-center">
          <img
            src="https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/a3611be00ea9b9c5a87f435e302fee04740c9aa39e3e86faa239c1ebcdf53257.png"
            alt=""
            className="mb-2 rounded-t-lg object-cover"
          ></img>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          💎 Seeking Clarity
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400"></p>
      </Link>
      <br></br>
      <Link
        to="https://haseab.notion.site/5fb0df7bacd8465b92cc1955efd54517?v=dec6459a0113402ca37114e299277b66"
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-center items-center">
          <img
            src="https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/7bdfcccf3a3a02e62c61f1b02de0430c86c95e55bfa4cfb3e5a15375f7918416.png"
            alt=""
            className="mb-2 rounded-t-lg object-cover"
          ></img>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Content Resonance
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Content that I have resonated with
        </p>
      </Link>
      <br></br>
      <Link
        to="https://www.youtube.com/@haseab"
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-center items-center">
          <img
            src="https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/4b66fd63a118e71f0702d66074692c2141129eff871bc414a7261e7ecc9592f1.png"
            alt=""
            className="mb-2 rounded-t-lg object-cover"
          ></img>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Video Journal
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          I documented my journey on YouTube over the last 3 years
        </p>
      </Link>
      <br></br>
      <Link
        to="https://haseab.notion.site/haseab/29b9004090e44b40a0f0b8dc4cc31fa6?v=f8c366baa3d34f3db58bbded0fe55cab"
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-center items-center">
          <img
            src="https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/98a2ca45a1abb30ac08302ceea418ff0635977c6c084590dfa38fc80b168ee1c.png"
            alt=""
            className="mb-2 rounded-t-lg object-cover"
          ></img>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Systems
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Habits and systems that I have built over time
        </p>
      </Link>
      <br></br>
      <Link
        to="https://haseab.medium.com/"
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-center items-center">
          <img
            src="https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/cb2104e111b32b8a41abb8706845d778d4d49a1e3d5922e4ff8e3f74adffc124.png"
            alt=""
            className="mb-2 rounded-t-lg object-cover"
          ></img>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Musings
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Medium Articles I wrote in 2020
        </p>
      </Link>

      <br></br>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Contact
        </h5>

        <SocialIcon className="m-1" url="https://twitter.com/haseabamin" />
        <SocialIcon className="m-1" url="https://linkedin.com/in/haseab" />
        <SocialIcon className="m-1" url="https://instagram.com/haseabamin" />
        <SocialIcon className="m-1" url="mailto:hello@haseab.com" />
      </div>
    </div>
  );
};

export default Directory;
