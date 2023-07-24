import React from 'react'
import vg from "../assets/2.webp"
import {AiFillAmazonCircle, AiFillGoogleCircle,AiFillInstagram,AiFillYoutube,} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1>Wizard</h1>
          <p>Magic happens here!</p>
        </main>
      </div>
      <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            A brand for a company is like a reputation for a person. You earn a
            reputation by trying to do hard things well.
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            expedita id voluptatum amet? Autem voluptate totam distinctio ipsum
            nulla nam suscipit eaque. Voluptas dignissimos inventore enim, eius
            harum dolores quasi?
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home