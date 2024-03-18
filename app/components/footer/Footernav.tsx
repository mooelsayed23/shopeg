import { IoLocationOutline,IoCallOutline,IoMailOutline } from "react-icons/io5";
const footerLists = [
    {
      title: "Popular Categories",
      links: ["Fashion", "Electronic", "Cosmetic", "Health", "Watches"]
    },
    {
      title: "Products",
      links: ["Prices drop", "New products", "Best sales", "Contact us", "Sitemap"]
    },
    {
      title: "Our Company",
      links: ["Delivery", "Legal Notice", "Terms and conditions", "About us", "Secure payment"]
    },
    {
      title: "Services",
      links: ["Prices drop", "New products", "Best sales", "Contact us", "Sitemap"]
    },
    {
      title: "Contact",
      info: "  419 State 414 Rte Beaver Dams, New York(NY), 14812, USA",
      phone: "  (607) 936-8058",
      email: "  example@gmail.com"
    }
    
  ];
  
  const Footer = () => {
    return (
      <div className="md:flex text-nowrap mx-auto w-11/12 gap-5 justify-between border-b">
        {footerLists.map((list, index) => (
          <ul className="footer-nav-list w-1/5 mb-10" key={index}>
            <li className="footer-nav-item relative">
              <h2 className="nav-title font-bold text-xl text-white py-2 mt-8 after:bg-red-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-14 mb-6 text-wrap ">{list.title}</h2>
            </li>
            {list.links && list.links.map((link, idx) => (
              <li className="footer-nav-item" key={idx}>
                <a href="#" className="footer-nav-link text-sm mb-3">{link}</a>
              </li>
            ))}
            {list.info && (
              <li className="footer-nav-item flex items-start">
                <div className="icon-box text-2xl mr-2"><IoLocationOutline/></div>
                <address className="content text-sm text-wrap ">{list.info}</address>
              </li>
            )}
            {list.phone && (
              <li className="footer-nav-item flex items-center">
                <div className="icon-box text-2xl mr-2"><IoCallOutline/></div>
                <a href={`tel:${list.phone}`} className="footer-nav-link text-sm my-3">{list.phone}</a>
              </li>
            )}
            {list.email && (
              <li className="footer-nav-item flex items-center">
                <div className="icon-box text-2xl mr-2"> <IoMailOutline/> </div>
                <a href={`mailto:${list.email}`} className="footer-nav-link text-justify text-sm">{list.email}</a>
              </li>
            )}
            
          </ul>
        ))}
      </div>
    );
  };
  
  export default Footer;
  