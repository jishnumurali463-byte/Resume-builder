import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: "url('https://wallpapercave.com/wp/wp8579660.jpg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top',
          backgroundSize: 'cover'
        }}
        className="container-fluid row align-items-center"
      >
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: 'SeaShell' }}>
            <h3>
              Designed to get hired. <br />
              Your Skills, your Story, your next job — all in one.
            </h3>
            <Link to={'/resume'} className='btn text-white' style={{ backgroundColor: 'RebeccaPurple' }}>
              Make your resume
            </Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>

      {/* tools */}
      <section className='m-5'>
        <h1 className="text-center">Tools</h1>
        <div className="container row align-items-center">
          <div className="col-md-6">
            <div className='my-3'>
              <h4>Resume</h4>
              <p>Create unlimited new resumes and easily edit them afterwards</p>
               </div>
                <div className='my-3'>
              <h4>Cover Letters</h4>
              <p>Easily write professional cover letters.</p>
               </div>
                <div className='my-3'>
              <h4>Jobs</h4>
              <p>Automatically receive new and relevant job postings.</p>
               </div>
                <div className='my-3'>
              <h4>Applications</h4>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
               </div>

          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume"/>

          </div>

        </div>

      </section>
      {/* image */}
      <section style={{height:'450px',width:'100%',backgroundImage:'url("https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg")',backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>

      </section>
      {/* testimony */}
      <section className="m-5">
        <h1 className="text-center my-5">Testimonial</h1>
        <div className="row container ">
          <div className="col-md-6">
            <h3 className='my-5'>Trusted by professionals worldwide</h3>
            <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results. </p>

            <p>
              In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p>


            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.
            </p>

          </div>
         
          
          <div className="col-md-6 col-12">
            <div className="row">
            </div>
           <div className="row g-3 my-3 ms-5">

            

              <div className="col-3">
                <img className='w-100' src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://st4.depositphotos.com/1017228/20282/i/450/depositphotos_202829902-stock-photo-close-portrait-smiling-young-man.jpg" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://t3.ftcdn.net/jpg/03/22/53/38/360_F_322533850_Lz5JL2K0nVqL48gjCiRLSa2ssxpdfyer.jpg" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1167768374/photo/young-indian-man-wearing-elegant-shirt-standing-over-isolated-white-background-with-a-happy.jpg?s=612x612&w=0&k=20&c=UGE8NIZ57YR-GI29GOH2nEl2QAyTAFgaem_n7FMYYnw=" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/premium-photo/studio-shot-young-handsome-bearded-indian-man-against-white_251136-61456.jpg" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/2187592637/photo/happy-indian-mature-man-holding-digital-tablet.jpg?s=612x612&w=0&k=20&c=WxA52t6UTzYmyerEJl5DLosEGaM5ijeWCq2pMVGWcQg=" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1949501832/photo/handsome-hispanic-senior-business-man-with-crossed-arms-smiling-at-camera-indian-or-latin.jpg?s=612x612&w=0&k=20&c=LtlsYrQxUyX7oRmYS37PnZeaV2JmoPX9hWYPOfojCgw=" alt="person" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/handsome-hispanic-senior-business-man-600nw-2343004193.jpg" alt="person" />

              </div>
                             <div className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="person" />

              </div>
              

            </div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default LandingPage;
