import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import Category from "./components/category/Category";
import Footerlayout from "./components/footer/Footerlayout";
import Productmin from "./components/products/Productmin";
import SidebarComponent from "./components/products/sidebar/SidebarLayout";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <div className=" mx-auto allproduct">
        <div className="lg:w-11/12 mx-auto flex ">        
        <SidebarComponent />
        <Productmin />        
        </div>
      
      </div>
      {/* <Testimonial/> */}
      {/* <Blog/> */}
      {/* <Footerlayout/> */}
    </>
  );
}
