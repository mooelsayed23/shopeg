import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import Productmin from "./components/products/Productmin";
import Psidbar from "./components/products/Psidbar";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <div className=" mx-auto allproduct">
        <div className="w-11/12 mx-auto flex ">        
        <Psidbar />
        <Productmin />        
        </div>
      
      </div>
      <Testimonial/>
    </>
  );
}
