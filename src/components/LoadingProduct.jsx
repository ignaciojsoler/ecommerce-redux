import React from "react";
import ContentLoader from "react-content-loader";

const LoadingProduct = () => {
  return (
    <div>
      <ContentLoader
        viewBox="0 0 700 300"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
        className="m-auto opacity-0 sm:opacity-100 sm:w-3/4"
      >
        <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
        <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
        <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
        <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
        <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
        <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
        <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
        <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
        <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
        <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
        <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
        <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 500 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="relative m-auto opacity-100 sm:opacity-0 -top-48"
      >
        <path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z" />
        <ellipse cx="120" cy="140" rx="28" ry="28" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 400 130"
        className="relative first-line:m-auto opacity-100 sm:opacity-0 -top-48"
      >
        <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
        <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
        <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
        <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
        <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
        <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
      </ContentLoader>
    </div>
  );
};

export default LoadingProduct;
