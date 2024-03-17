import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import Productmin from "./components/products/Productmin";
import Psidbar from "./components/products/Psidbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <div className=" mx-auto">
        <div className="w-11/12 mx-auto flex ">        
        <Psidbar />
        <Productmin />        
        </div>
      
      </div>
      
    </>
  );
}
