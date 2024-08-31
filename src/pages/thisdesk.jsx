import React from "react";

export const ThisDesk = () => {
  return (
    <div className="max-w-3xl rounded-lg p-12">
      <p className="text-5xl text-center">This desk</p>
      <br></br>
      <img
        className="mx-auto"
        src="https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/797d8731b670d33b4aaaf0f95ff82e3bc2b45d2803b9ddb9d1791b7cc5791bcb.png"
        alt="desk"
      />
      <br></br>
      <div className="space-y-4 prose-lg">
        <p>music blaring, keyboard clacking, trackpad swiping.</p>
        <p>littered wrappers, chicken tenders, scooter glasses</p>
        <p>cold breeze, warm machine, bright screen</p>
        <p>minty gum, having some, another one</p>
        <br></br>
        <p>late nights, long days</p>
        <p>3am, still awake</p>
        <p>headphones in, world out </p>
        <p>eyes ahead, no doubt </p>
        <br></br>
        <p>that is the spirit this desk.</p>
        <p>-h</p>
      </div>
    </div>
  );
};

export default ThisDesk;
