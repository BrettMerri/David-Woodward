import React from 'react';
import './Home.css';

const Home = () => (
  <div>
    <header className="masthead">
      <div className="header-content">
        <div className="header-content-inner">
          <h1 className="title">David J. Woodward Scholarship Fund</h1>
          <p>established by Tim and Christine Woodward in memory of their son David.</p>
          <button className="btn btn-default">Contribute</button>
        </div>
      </div>
    </header>
    <div className="main container">
      <div className="row section">
        <div className="col-md-6">
          <p>The David J. Woodward Scholarship Fund was established by Tim and Christine Woodward in memory of their son David. Applicants must have career goal of becoming a certified General Motors Technician (Automotive Service Education Program). The scholarship will be awarded to a student with a financial need who displays a commitment to serving others (in school, their community, or at home), a strong work ethic, and leadership skills associated to the automotive field.</p>
        </div>
        <div className="col-md-6">
          <p>The David J. Woodward Scholarship Fund is a 501(c)(3) organization dedicated helping those with a financial need by providing scholarships to deserving, qualified students with a strong desire to attend the GM A.S.E.P program and/or a current Warren Mott Football player that will attend a Vocational School, Trade or Technical school with the desire and commitment to become a Plumber, Electrician, or  H.V.A.C Technician.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Home;