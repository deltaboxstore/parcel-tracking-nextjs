'use client';

import React, { useEffect } from "react";

export const AdBlock = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore initialization errors
    }
  }, []);

  return (
    <>
      <div className="my-4">
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4194808111663749"
          data-ad-slot="5003292159"
          data-ad-format="auto">
        </ins>
      </div>
      <div className="my-4">
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4194808111663749"
          data-ad-slot="8978895256"
          data-ad-format="fluid"
          data-ad-layout-key="+30+qw+o-1s+9a">
        </ins>
      </div>
      <div className="my-4 text-center">
        <ins className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-4194808111663749"
          data-ad-slot="6134983374"
          data-ad-format="fluid"
          data-ad-layout="in-article">
        </ins>
      </div>
    </>
  );
};
