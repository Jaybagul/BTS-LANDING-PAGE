import React from 'react'
import './Content.css'
import Button from 'react-bootstrap/Button';
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";


const Content = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 pt-5 text-white">

            <h2>Easy way to find <br />the right car</h2>
            <p>Finder is a leading digital marketplace for the <br /> automotive industry that connects car shoppers <br /> with sellers.</p>
            <Button variant="primary">Get It Now</Button>
          <div className='icons'>
          <FaTwitter className='m-2' />
          <RiInstagramFill className='m-2' />
          <FaFacebook  />

          </div>
          </div>
          <div className="col-6 pt-5 "><img className='mt-5' height={410} src="https://finder-react.createx.studio/_next/image?url=%2Fimages%2Fcar-finder%2Fhome%2Fhero-img.png&w=1920&q=75" alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default Content
