import React, {useEffect} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResortList from "../components/ResortList";
const PropertyListingPage = () => {

  return (
    <div className="grid" id="main-container">

    <Header/>
    <main>
      <ResortList />
    </main>
    <Footer/>

</div>
  )
}

export default PropertyListingPage