import Image from "next/image";

const blogPosts = [
    {
      imgSrc: "/assets/images/blog-1.jpg",
      alt: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
      category: "Fashion",
      title: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
      author: "Mr Admin",
      date: "Apr 06, 2022"
    },
    {
      imgSrc: "/assets/images/blog-2.jpg",
      alt: "Curbside fashion Trends: How to Win the Pickup Battle.",
      category: "Clothes",
      title: "Curbside fashion Trends: How to Win the Pickup Battle.",
      author: "Mr Robin",
      date: "Jan 18, 2022"
    },
    {
      imgSrc: "/assets/images/blog-3.jpg",
      alt: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
      category: "Shoes",
      title: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
      author: "Mr Selsa",
      date: "Feb 10, 2022"
    },
    {
      imgSrc: "/assets/images/blog-4.jpg",
      alt: "Curbside fashion Trends: How to Win the Pickup Battle.",
      category: "Electronics",
      title: "Curbside fashion Trends: How to Win the Pickup Battle.",
      author: "Mr Pawar",
      date: "Mar 15, 2022"
    }
  ];
  
  const Blog = () => {
    return (
      <div className="flex flex-wrap mx-auto w-11/12 gap-6">
        {blogPosts.map((post, index) => (
          <div className="blog-card " key={index}>
            <a href="#">
              <Image
                src={post.imgSrc}
                alt={post.alt}
                width="300"
                height="300"
                className="blog-banner h-auto w-full rounded-md mb-4"
              />
            </a>
  
            <div className="blog-content">
              <a href="#" className="blog-category text-sm text-red-400 ">
                {post.category}
              </a>
  
              <a href="#">
                <h3 className="blog-title font-bold">{post.title}</h3>
              </a>
  
              <p className="blog-meta text-sm">
                By <cite>{post.author}</cite> /{" "}
                <time dateTime={post.date}>{post.date}</time>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Blog;
  