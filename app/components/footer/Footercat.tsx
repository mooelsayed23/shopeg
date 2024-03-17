import React from "react";

const Footercat = () => {
  const footerCategories = [
    {
      title: "Fashion :",
      links: [
        "T-shirt",
        "Shirts",
        "shorts & jeans",
        "jacket",
        "dress & frock",
        "innerwear",
        "hosiery",
      ],
    },
    {
      title: "footwear :",
      links: [
        "sport",
        "formal",
        "Boots",
        "casual",
        "cowboy shoes",
        "safety shoes",
        "Party wear shoes",
        "Branded",
        "Firstcopy",
        "Long shoes",
      ],
    },
    {
      title: "jewellery :",
      links: [
        "Necklace",
        "Earrings",
        "Couple rings",
        "Pendants",
        "Crystal",
        "Bangles",
        "bracelets",
        "nosepin",
        "chain",
      ],
    },
    {
      title: "cosmetics :",
      links: [
        "Shampoo",
        "Bodywash",
        "Facewash",
        "makeup kit",
        "liner",
        "lipstick",
        "prefume",
        "Body soap",
        "scrub",
        "hair gel",
        "hair colors",
        "hair dye",
        "sunscreen",
        "skin loson",
        "liner",
        "lipstick",
      ],
    },
  ];
  return (
    <>
      <div className="footer-category w-11/12 mx-auto border-b pb-8 pt-4">
        <div className="container">
          <h2 className="footer-category-title text-pink-500 text-xl font-semibold mb-3">
            Brand directory
          </h2>

          {footerCategories.map((category, index) => (
            <div className="footer-category-box flex mb-2 flex-wrap" key={index}>
              <h3 className="category-box-title m-2 font-semibold text-neutral-200">{category.title}</h3>
              {category.links.map((link, idx) => (
                <React.Fragment key={idx}>
                  <a href="#" className="footer-category-link m-2 text-nowrap ">
                    {link}
                  </a>
                  {idx < category.links.length - 1 && <span className="m-2"> | </span>}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footercat;
