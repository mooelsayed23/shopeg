import Image from "next/image";
import "./category.scss";

const categories = [
  {
    icon: "/assets/images/icons/dress.svg",
    title: "Dress & frock",
    amount: "(53)",
  },
  {
    icon: "/assets/images/icons/coat.svg",
    title: "Winter wear",
    amount: "(58)",
  },
  {
    icon: "/assets/images/icons/glasses.svg",
    title: "Glasses & lens",
    amount: "(68)",
  },
  {
    icon: "/assets/images/icons/shorts.svg",
    title: "Shorts & jeans",
    amount: "(84)",
  },
  { icon: "/assets/images/icons/tee.svg", title: "T-shirts", amount: "(35)" },
  { icon: "/assets/images/icons/jacket.svg", title: "Jacket", amount: "(16)" },
  { icon: "/assets/images/icons/watch.svg", title: "Watch", amount: "(27)" },
  { icon: "/assets/images/icons/hat.svg", title: "Hat & caps", amount: "(39)" },
];

const Category = () => {
  return (
    <div className="category mt-8 w-11/12 mx-auto">
      <div className=" w-full">
        <div className=" flex flex-nowrap justify-between overflow-auto gap-5">
          {categories.map((category, index) => (
            <div
              className="cat flex border border-[#ededed] rounded-[10px] items-center text-nowrap p-4 gap-4 mb-5 shrink-0"
              key={index}
            >
              <div className="category-img-box p-3 bg-neutral-200">
                <Image
                  src={category.icon}
                  alt={category.title}
                  width="30"
                  height="30"
                />
              </div>
              <div className="category-content-box flex flex-col w-full">
                <div className="category-content-flex flex justify-between grow w-full items-center">
                  <h3 className="category-item-title font-bold">
                    {category.title}
                  </h3>
                  <p className="category-item-amount text-xs">
                    {category.amount}
                  </p>
                </div>
                <a
                  href="#"
                  className="category-btn text-pink-500 font-semibold"
                >
                  Show all
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
