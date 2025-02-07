import React from 'react'

const About = () => {
  return (
    <section className="about style-13">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-8">
              <div className="info">
                <h5> About Me </h5>
                <div className="text">
                I’m a Software Engineer with over six years of experience specializing in UI/UX, web, and cloud development. My expertise spans from building scalable applications to managing DevOps infrastructure. I’ve contributed to government and private sector projects, ensuring efficient digital transformation. Above all, I believe that technology should drive innovation and create meaningful impact in society.
                </div>
                <div className="logos">
                  <img src="/assets/img/about/logo1.png" alt="" />
                  <img src="/assets/img/about/logo2.png" alt="" />
                  <img src="/assets/img/about/logo3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-contact">
                <div className="item mt-5 mt-lg-0">
                  <div className="inf">
                    <p> Full Name </p>
                    <h6> Bright Mafungautsi Kapamulomo </h6>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/icons/ab_13_1.png" alt="" />
                  </div>
                </div>
                <div className="item mt-30">
                  <div className="inf">
                    <p> Email Address </p>
                    <h6> brightmafungautsikapamulomo<br />@gmail.com </h6>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/icons/ab_13_2.png" alt="" />
                  </div>
                </div>
                <div className="item mt-30">
                  <div className="inf">
                    <p> Phone </p>
                    <h6> +260 979 093 645 </h6>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/icons/ab_13_3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About