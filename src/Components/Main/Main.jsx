import React from 'react'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div>
        <div class="row">
            <div class="col">
        <h1 class="m-3 p-3">Age Calculator</h1>
        <p class="text-align:justify m-3 p-2">An age calculator app is a simple yet useful tool designed to determine a person's exact age based on their date of birth. Users can input their birthdate, and the app instantly calculates their current age in years, months, and days. This app can also be used to find out the difference in age between two individuals or calculate ages for future or past dates. It's convenient for a variety of purposes, such as verifying eligibility for age-specific activities or simply keeping track of milestones.</p>
        <Link to="/calculator">
        <button className="btn btn-primary m-5">Get Started</button>
      </Link>
        </div>
        <div class="col m-5">
        <img src="https://play-lh.googleusercontent.com/ijPraQyXSk9bOsOmAQMnf62ypTO8UM5alId2rFP-oZAFoTA3KfKGfssN6O1p7SgF0Ws"   width="500px" height="500px" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Main